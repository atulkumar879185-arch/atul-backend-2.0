const mongoose = require('mongoose')

const post = new mongoose.Schema({
    caption: {
        type: String,
        require: [true, "please enter caption"]
    },
    imageurl: {
        type: String,
        require: [true, "please enter your image"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "please enter user"]
    }
})
const postmodle = mongoose.model("post", post);
module.exports = postmodle