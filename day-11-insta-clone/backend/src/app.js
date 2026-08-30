const express = require('express');
const app = express();
const authrouter=require('./router/user.auth');
const postrouter=require('./router/userpost')
const cookie=require('cookie-parser');
const dotenv=require('dotenv')




dotenv.config();
app.use(cookie());
app.use(express.json());


app.use('/api/auth',authrouter);
app.use('/api/post',postrouter)



module.exports = app;