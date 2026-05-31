const app = require('./src/app');

const connectdb=require('./src/config/database')
const mongoose = require('mongoose');
connectdb();






app.listen(3000, () => {
    console.log("server on start port no 3000");
});