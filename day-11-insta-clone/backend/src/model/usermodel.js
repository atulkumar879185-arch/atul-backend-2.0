const mongoose=require('mongoose');
const user=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        default:""
    },
    profilepic:{
        type:String,
        default:"https://ik.imagekit.io/hryliscsg/Default_user.jpg"
    }
})
const usermodel=mongoose.model('user',user);
module.exports=usermodel;