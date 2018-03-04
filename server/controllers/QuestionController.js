let Question = require("mongoose").model("Question")
let Answer = require("mongoose").model("Answer")

class QuestionController {
    create(request, response) {
        let question = new Question(request.body)
        question.save(error => {
            if (error) {
                console.log("error: QuestionController.create", error)
            }
            else {
                response.json({question: question})
            }
        })
    }
    getAll(request, response) {
        Question.find({}, (error, questions) => {
            response.json({questions: questions})
        })
    }
    getOne(request, response) {
        Question.findOne({_id: request.params.qid})
        .populate({path: "answers", options: {sort: {"likes": -1}}})
        .exec((error, question) => {
            response.json({question: question})
        })
    }
    search(request, response) {
        let query = request.params.query
        Question.find({title: {$regex: new RegExp("^" + query, "i")}}, (error, questions) => {
            response.json({questions: questions})
        })
    }
}

module.exports = new QuestionController()