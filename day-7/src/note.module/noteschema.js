const mongoose = require('mongoose');
const noteschema=new mongoose.Schema({
    "name":String,
    "course":String,
    "age":Number
})
const notemodle=mongoose.model('details',noteschema)
module.exports=notemodle;