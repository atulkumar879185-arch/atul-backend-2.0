const mongoose=require('mongoose');
require('dotenv').config();
const connectdb = async () => {
    
        await mongoose.connect(process.env.mongo_uri);

        console.log('server connect to db');
    
};
module.exports=connectdb;
