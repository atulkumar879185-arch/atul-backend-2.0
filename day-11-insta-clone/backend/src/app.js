const express = require('express');
const app = express();
app.use(express.json());
const authrouter=require('./router/user.auth');
const cookie=require('cookie-parser');
app.use(cookie());


app.use('/api/auth',authrouter);
module.exports = app;