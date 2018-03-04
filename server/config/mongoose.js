let mongoose = require("mongoose")
let path = require("path")
let models = path.join(__dirname, "../models")

mongoose.connect("mongodb://localhost/belt_exam")
mongoose.Promise = global.Promise

require("../models/Question.js")
require("../models/Answer.js")