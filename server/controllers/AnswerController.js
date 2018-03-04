let Question = require("mongoose").model("Question")
let Answer = require("mongoose").model("Answer")

class AnswerController {
    create(request, response) {
        Question.findById(request.params.qid, (error, question) => {
            let answer = new Answer(request.body)
            answer._question = question._id
            answer.save(error => {
                question.answers.push(answer)
                question.save(error => {
                    response.json({})
                })
            })
        })
    }
    getOne(request, response) {
        Answer.findOne({_id: request.params.aid}, (error, answer) => {
            response.json({answer: answer})
        })
    }
    like(request, response) {
        Answer.findById(request.params.aid, (error, answer) => {
            answer.likes = request.body.likes
            answer.save(error => {
                response.json({})
            })
        })
    }
}

module.exports = new AnswerController()
