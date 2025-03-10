class UserController {
    constructor({ userService }) {
        this.userService = userService;
    }

    getUser(req, res) {
        const user = this.userService.getUser();
        res.json(user);
    }
}

module.exports = UserController;
