let mongoose = require("mongoose")
let User = require("./Question")

mongoose.model("Answer", new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    likes: {type: Number},
    poster: {type: String},
    _question: {type: mongoose.Schema.Types.ObjectId, ref: "Question"}
}, {timestamps: true}))

let Answer = mongoose.model("Answer")
module.exports = Answer
