const mongoose=require('mongoose');
const noteschema=new mongoose.Schema({
    name:String,
    course:String
})
const note=mongoose.model("notedetail",noteschema)
module.exports=note