const express=require('express')
const Router=express.Router()
const identifyuser=require('../middleware/identifyuser')
const userfollow=require('../controller/followcontroller')




//followuser route
Router.post("/followuser/:followerid",identifyuser,userfollow.followcontroller);

//unfollowuser route
Router.delete("/unfollowuser/:followerid",identifyuser,userfollow.unfollowcontroller);

module.exports=Router