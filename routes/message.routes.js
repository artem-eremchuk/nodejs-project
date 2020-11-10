const express = require('express');
const router = express.Router();
const MessageControllers = require('../controllers/message.controllers');

/**
 * @swagger
 * /messages:
 *  get:
 *      summary: Получить список всех сообщений
 *      tags:
 *          - Messages
 *      responses:
 *          '200':
 *              description: Успешный ответ
 */ 

router.get('/', async (req, res) => {
    try {
        const messages = await MessageControllers.getMessages();
        res.send(messages);
    } catch (e) {
        console.log(e);
    }
});

/**
 * @swagger
 * /messages/messageById/{id}:
 *  get:
 *      summary: Получить сообщение по id
 *      tags:
 *        - Messages
 *      parameters:
 *        - in: path
 *          name: id
 *          requered: true
 *          scheme: 
 *              type: integer
 *      responses:
 *          '200':
 *              description: Успешный ответ
 */ 

router.get('/messageById/:id', async (req, res) => {
    try{
        const message = await MessageControllers.getMessageById(req.params.id);
        res.send(message);
    } catch (e){
        console.log(e);
    }
});

/**
 * @swagger
 * /messages/addMessage:
 *  post:
 *      summary: Добавить сообщение в список
 *      tags:
 *        - Messages
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: Message
 *          required: true
 *          description: Добавить объект со свойствами
 *          schema:
 *              $ref: '#/definitions/Message'
 *      responses:
 *          '200':
 *              description: Успешный ответ
 * definitions:
 *  Message:
 *      type: object
 *      required: 
 *          - id
 *          - text
 *      properties:
 *          id: 
 *              type: integer
 *          text: 
 *              type: string
 */ 

router.post('/addMessage', async (req, res) => {
    try {
        const answer = await MessageControllers.addMessage(req.body);
        res.send(answer);
    } catch (e) {
        console.log(e);
    }
});

/**
 * @swagger
 * /messages/editMessage/{id}:
 *  put:
 *      summary: Заменить сообщение в списке
 *      tags:
 *        - Messages
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Указать id который нужно заменить
 *          type: integer
 *        - in: body
 *          name: Message
 *          required: true
 *          description: Объект для замены  
 *          schema:
 *              $ref: '#/definitions/Message'
 *      responses:
 *          '200':
 *              description: Успешный ответ
 * definitions:
 *  Message:
 *      type: object
 *      required: 
 *          - id
 *          - text
 *      properties:
 *          id: 
 *              type: integer
 *          text: 
 *              type: string
 */ 

router.put('/editMessage/:id', async (req, res) => {
    try {
        const answer = await MessageControllers.editMessage(req.params.id, req.body);
        res.send(answer);
    } catch (e) {
        console.log(e);
    }
});

/**
 * @swagger
 * /people/deleteMessage/{id}:
 *  delete:
 *      summary: Удалить сообщение из списка
 *      tags:
 *        - Messages
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Указать id который нужно удалить
 *          type: integer
 *      responses:
 *          '200':
 *              description: Успешный ответ
 */ 

router.delete('/deleteMessage/:id', async (req, res) => {
    try {
        const answer = await MessageControllers.deleteMessage(req.params.id);
        res.send(answer);
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;