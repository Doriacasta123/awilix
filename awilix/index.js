const express = require('express');
const { createContainer, asClass, asFunction } = require('awilix');
const UserService = require('./services/userService');
const UserController = require('./controllers/userController');

const app = express();
const container = createContainer();

// Registro de servicios
container.register({
    userService: asClass(UserService).scoped(),
    userController: asClass(UserController).scoped()
});

app.get('/user', (req, res) => {
    const userController = container.resolve('userController');
    userController.getUser(req, res);
});

app.listen(8080, () => {
    console.log('Server running on http://localhost:3000');
});
