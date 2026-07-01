const express = require('express')
const notemodle = require('../schema/schema')
const jwt = require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const authroute = express.Router()
authroute.post('/regester', async (req, res) => {
    const { name, email, password } = req.body

    const userexist = await notemodle.findOne({ email })
    if (userexist) {
        return res.status(400).json({
            message: "user alredy exist"
        })
    }

    const hashpass=await bcrypt.hash(password,10)


    const user = await notemodle.create({
        name,
        email,
        password: hashpass
    })

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET)
    
    

    res.cookie("jwt_token", token)
    res.status(201).json({
        message: "user regester successfully",
        data: user,
        token
    })

})
authroute.post('/login', async (req, res) => {
    const { email, password } = req.body
    const user = await notemodle.findOne({ email })
    if (!user) {
        return res.status(401).json({
            message: "user not exist with this email"
        })
    }

    const checkpass = await bcrypt.compare(password, user.password)
    if (!checkpass) {
        return res.status(401).json({
            message: "invalid password"
        })
    }

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET)
    res.cookie("jwt_token", token)

    res.status(201).json({
        message: "login successfully",
        user,
        token
    })
})


module.exports = authroute