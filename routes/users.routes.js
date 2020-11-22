const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const UsersControllers = require('../controllers/users.controllers');
const authenticatToken = require('../middleware/auth');

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

/**
 * @swagger
 * /users/register:
 *  post:
 *      summary: Регистрация пользователя
 *      tags:
 *        - Users
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: User
 *          required: true
 *          description: Добавить объект со свойствами
 *          schema:
 *              $ref: '#/definitions/UserRegister'
 *      responses:
 *          '200':
 *              description: Успешный ответ
 * definitions:
 *  UserRegister:
 *      type: object
 *      required: 
 *          - id
 *          - firstname
 *          - lastname
 *          - email
 *          - password
 *      properties:
 *          id: 
 *              type: integer
 *          text: 
 *              type: string
 *          firstname:
 *              type: string
 *          lastname:
 *              type: string
 *          email:
 *              type: string
 *          password:
 *              type: string
 */ 

router.post('/register', async (req, res) => {
    try {
        const user = await UsersControllers.registerUser(req.body);
        res.send(user);
    } catch (e) {
        console.log(e);
    }
});

/**
 * @swagger
 * /users/login:
 *  post:
 *      summary: Проверка логина и пароля
 *      tags:
 *        - Users
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: User
 *          required: true
 *          description: Добавить объект со свойствами
 *          schema:
 *              $ref: '#/definitions/UserLogin'
 *      responses:
 *          '200':
 *              description: Успешный ответ
 * definitions:
 *  UserLogin:
 *      type: object
 *      required: 
 *          - email
 *          - password
 *      properties:
 *          email:
 *              type: string
 *          password:
 *              type: string
 */ 

router.post('/login', async (req, res) => {
    try {
        const token = await UsersControllers.loginUser(req.body);
        res.send(token);
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;

