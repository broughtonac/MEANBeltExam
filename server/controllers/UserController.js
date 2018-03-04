class UserController {
    setUser(request, response) {
        request.session.user = request.body
        response.json({})
    }
    getUser(request, response) {
        let user = request.session.user
        response.json({user: user})
    }
    logout(request, response) {
        request.session.destroy()
        response.json(false)
    }
}

module.exports = new UserController()