const mongoose = require('mongoose');
const dotenv=require('dotenv')
dotenv.config();
const connectdb = (() => {
    mongoose.connect(process.env.mongo_uri)
        .then(() => console.log('Connected to MongoDB'))


})
module.exports=connectdb;