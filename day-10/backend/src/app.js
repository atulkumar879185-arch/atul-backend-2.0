const express=require('express')
const app=express()
app.use(express.json())
const connectdb=require('./config/database')
connectdb()
const authroute=require('./authroute/auth.route')
const cookeiparser=require('cookie-parser')
app.use(cookeiparser())

app.use('/api/auth',authroute)




module.exports=app