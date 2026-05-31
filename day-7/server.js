const app = require('./src/app')
const mongoose = require('mongoose');
const connectdb=require('./src/config/database')
const notemodle=require('./src/note.module/noteschema')
connectdb();

app.post('/notesdata',async(req,res)=>{
    const {name,course,age}=req.body
    const data= await notemodle.create({
        name,
        course,
        age
    })
    res.status(201).json({
        massage:"data created successfully",
        data:data
    })
})

app.get('/notesdata',async(req,res)=>{
    const meradata= await notemodle.find()


    res.status(200).json({
        massage:"data fetched successfully",
        data:meradata
    })
})

app.patch('/notesdata/:id',async(req,res)=>{
    const {id}=req.params
    const {name,course,age}=req.body   
    const updatedata= await notemodle.findByIdAndUpdate(id,{
        name,
        course,
        age
    },{new:true})
    res.status(200).json({
        massage:"data updated successfully",
        data:updatedata
    })
}
)

app.delete('/notesdata/:id',async(req,res)=>{
    const {id}=req.params
    await notemodle.findByIdAndDelete(id)
    res.status(200).json({
        massage:"data deleted successfully"
    })
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});