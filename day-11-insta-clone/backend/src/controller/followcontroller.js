const usermodle=require('../model/usermodel')
const followmodle=require('../model/followmodel')

async function followcontroller(req,res){
    const follower=req.user.id
    const followee=req.params.followerid
    
    if(follower==followee){
        return res.status(401).json({
            message:"you can not follow your self"
        });
    }

    const followeeExist= await usermodle.findById(followee)
    if(!followeeExist){
        return res.status(401).json({
            message:"user not found"
        })
    }
    const alreadyfollow=await followmodle.findOne({
        follower:follower,
        followee:followee
    })
    if(alreadyfollow){
        return res.status(401).json({
            message:"you are already exist "
        })
    }
    const newfollow=await followmodle.create({
        follower:follower,
        followee:followee
    })
    res.status(200).json({
        message:"you are follow this user"
    })
}

async function unfollowcontroller(req,res){
    const follower=req.user.id
    const followee=req.params.followerid

    const followeeExist= await usermodle.findById(followee)
    if(!followeeExist){
        return res.status(401).json({
            message:"user not found"
        })
    }
    const alreadyfollow=await followmodle.findOne({
        follower:follower,
        followee:followee
    })
    if(!alreadyfollow){
        return res.status(401).json({
            message:"you are not follow this user"
        })
    }
    const unfollow= await followmodle.findOneAndDelete({
        follower:follower,
        followee:followee
    })
    res.status(200).json({
        message:"you are unfollow this user"
    })
    
}
module.exports={
    followcontroller,
    unfollowcontroller
}