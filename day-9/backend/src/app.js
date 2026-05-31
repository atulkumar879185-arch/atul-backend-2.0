const express = require('express');
const note = require('./noteschema/noteschema')
const app = express();
const path = require('path')
const cors = require('cors')
app.use(express.json());
app.use(cors())
app.use(express.static('./public'))



app.post('/detail', async (req, res) => {
    const { name, course } = req.body;
    const data = await note.create({
        name,
        course
    })
    res.status(200).json({
        massage: "note create successfully",
        data: data
    })

})


app.get('/detail', async (req, res) => {
    const data = await note.find();
    res.status(201).json({
        massage: "all note details",
        data: data
    })
})

app.delete('/notedelete/:id', async (req, res) => {
    const id = req.params.id;
    const data = await note.findByIdAndDelete(id);
    res.status(200).json({
        massage: "note delete successfully",
        data: data
    })
})

app.patch('/noteupdate/:id', async (req, res) => {
    const id = req.params.id;
    const { name, course } = req.body;
    await note.findByIdAndUpdate(id, { name, course })
        .then(() => {
            res.status(200).json({
                massage: "note update successfully",

            })
        })
})

console.log(__dirname)
//middlewhare
app.use('*name', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/public/index.html'))
})









module.exports = app;