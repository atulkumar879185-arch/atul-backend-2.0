const mongoose=require('mongoose')

const followmodel=new mongoose.Schema({
   
    follower:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    followee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },    
}
,{
    timeseries:true
})

module.exports=mongoose.model('follow',followmodel)
