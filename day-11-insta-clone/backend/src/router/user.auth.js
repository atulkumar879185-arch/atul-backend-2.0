const express = require('express');
const router = express.Router();
const usermodel = require('../model/usermodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const cookie = require('cookie-parser');



router.post('/register', async (req, res) => {
    const { username, email, password, bio, profilepic } = req.body;
    const userexist = await usermodel.findOne({
        $or: [
            {
                username: username
            },
            {
                email: email
            }
        ]
    })
    if (userexist) {
        return res.status(400).json({
            message: "User already exists",
            detail: (userexist.email === email ? "Email already exists" : "Username already exists")
        });
    }
    const hashpass = await bcrypt.hash(password, 10);
    const newuser = await usermodel.create({
        username,
        email,
        password: hashpass,
        bio,
        profilepic
    })
    const token = jwt.sign({
        id: newuser._id,
        username: newuser.username,
        email: newuser.email
    }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
    res.cookie("token", token)
    res.status(201).json({
        message: "User registered successfully",
        token
    })


})

router.post('/login', async (req, res) => {
    const { username, email, password } = req.body;
    const userexist = await usermodel.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    })
    if (!userexist) {
        return res.status(400).json({
            message: "User not found",
            detail: "Username or email is incorrect"
        })
    }

    const passwordmatch=await bcrypt.compare(password,userexist.password);
    if(!passwordmatch){
        return res.status(400).json({
            message:"Invalid password"
        })
    }
    const token = jwt.sign({
        id: userexist._id,
        username: userexist.username,
        email: userexist.email
    }, process.env.JWT_SECRET, {
        expiresIn: '1d' 
    })
    res.cookie("token", token)
    res.status(200).json({
        message: "User logged in successfully",
        token
    })
})
    module.exports = router;