const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String
})
const notemodle=mongoose.model('jwt',userSchema)
module.exports=notemodle