let QuestionController = require("../controllers/QuestionController.js")
let AnswerController = require("../controllers/AnswerController.js")
let UserController = require("../controllers/UserController.js")
let path = require("path")

module.exports = (app) => {
    // user routes
    app.post("/usersdb", UserController.setUser)
    app.get("/usersdb", UserController.getUser)
    app.get("/logoutdb", UserController.logout)

    // question routes
    app.post("/questionsdb", QuestionController.create)
    app.get("/questionsdb", QuestionController.getAll)
    app.get("/questionsdb/:qid", QuestionController.getOne)
    app.get("/questionsdb/search/:query", QuestionController.search)

    // answer routes
    app.post("/answersdb/:qid", AnswerController.create)
    app.get("/answersdb/:aid", AnswerController.getOne)
    app.put("/answersdb/:aid", AnswerController.like)

    // express routes exhausted, now check angular routes
    app.all("*", (request, result, next) => {
        result.sendFile(path.resolve("./angular-app/dist/index.html"))
    })
}