const postmodle = require('../model/postmodel')
const identifyuser = require('../middleware/identifyuser')
const jwt = require('jsonwebtoken')
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


async function createcontroller(req, res) {

    if (!req.file) {
        return res.status(400).json({
            message: "Image is required"
        });
    }
    
    const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: "cohort-2-insta-clone-posts"
            },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );

        stream.end(req.file.buffer);
    });

    const post = await postmodle.create({
        user: req.user.id,
        imgurl: result.secure_url,
        caption: req.body.caption
    })

    res.status(200).json({
        message: "Post created successfully",
        usrid: req.user.id,
        imgurl: result.secure_url,
        caption: req.body.caption
    })
}

async function getpostcontroller(req, res) {

    let token;
    try {
        token = req.cookies.token
    }
    catch (error) {
        return res.status(401).json({
            message: "Unauthorized access please login first"
        })
    }
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    }
    catch (error) {
        return res.status(401).json({
            message: "invalid token"
        })
    }

    const posts = await postmodle.find({
        user: req.user.id
    })
    res.status(200).json({
        message: "Posts fetched successfully",
        posts: posts
    })
}

async function getpostdetailcontroller(req, res) {
    let token;
    try {
        token = req.cookies.token
    }
    catch (error) {
        return res.status(401).json({
            message: "Unauthorized access please login first"
        })
    }
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    }
    catch (error) {
        return res.status(401).json({
            message: "invalid token"
        })
    }

    let postid = req.params.postid
    let userid = req.user.id

    const post = await postmodle.findById({ _id:postid })
    if (!post) {
        return res.status(401).json({
            message: "post not found"
        })
    }

    let isvaliduser=post.user.toString()==userid
    if(!isvaliduser){
        return res.status(401).json({
            message: "unauthorized access"
        })
    }   

    res.status(200).json({
        message: "post fetched successfully",
        decoded: decoded.username,
        post: post
    })



}
module.exports = {
    createcontroller,
    getpostcontroller,
    getpostdetailcontroller

}





































