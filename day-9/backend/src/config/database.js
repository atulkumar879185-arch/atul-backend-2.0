const mongoose = require('mongoose');
const dns=require('dns')
require('dotenv').config();
dns.setServers(["1.1.1.1","8.8.8.8"]);
const connectdb = async () => {

  await mongoose.connect(process.env.MONGO_URI);

  console.log('server connect to db');

};
module.exports = connectdb;


