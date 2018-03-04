let mongoose = require("mongoose")
let User = require("./Answer")

mongoose.model("Question", new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    poster: {type: String},
    answers: [{type: mongoose.Schema.Types.ObjectId, ref: "Answer"}]
}, {timestamps: true}))

let Question = mongoose.model("Question")
module.exports = Question