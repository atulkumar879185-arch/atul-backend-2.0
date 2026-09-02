const mongoose=require("mongoose");

const postlikemodle=new mongoose.Schema({
    postid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post',
        required:true
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
},{
    timeseries:true
})

const postlike=mongoose.model('postlike',postlikemodle)
module.exports=postlike