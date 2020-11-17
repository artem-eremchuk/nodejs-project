const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const UsersControllers = require('../controllers/users.controllers');

const authenticatToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null){
            res.sendStatus(401);
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) throw new Error('invalid token');
            req.user = user;
            next();
        });
    } catch (e) {
        res.sendStatus(403);
    }
}

/**
 * @swagger
 * /users:
 *  get:
 *      summary: Получить список пользоваьелей
 *      tags:
 *          - Users
 *      responses:
 *          '200':
 *              description: Успешный ответ
 */ 

router.get('/', authenticatToken, async (req, res) => {
    try {
        const users = await UsersControllers.getUsers();
        res.send(users);
    } catch (e) {
        console.log(e);
    }
});

router.post('/register', async (req, res) => {
    try {
        const user = await UsersControllers.registerUser(req.body);
        res.send(user);
    } catch (e) {
        console.log(e);
    }
});

router.post('/login', async (req, res) => {
    try {
        const token = await UsersControllers.loginUser(req.body);
        res.send(token);
    } catch (e) {
        console.log(e);
    }
})

module.exports = router;

