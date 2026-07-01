const mongoose=require('mongoose')
const dotenv=require('dotenv')
const dns=require('dns')
dns.setServers(['0.0.0.0','1.1.1.1'])
dotenv.config()
const connectdb=()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connect to db")
    })
}
module.exports=connectdb