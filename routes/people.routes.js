const express = require('express');
const router = express.Router();
const PeopleControllers = require('../controllers/people.controllers');
const authenticatToken = require('../middleware/auth');

/**
 * @swagger
 * /people:
 *  get:
 *      summary: Получить список людей
 *      tags:
 *          - People
 *      responses:
 *          '200':
 *              description: Успешный ответ
 */ 

router.get('/', authenticatToken, async (req, res) => {
    try{
        const people = await PeopleControllers.getPeople();
        res.send(people);
    } catch (e){
        console.log(e);
    }
});

/**
 * @swagger
 * /people/personById/{id}:
 *  get:
 *      summary: Получить человека из списка по id
 *      tags:
 *        - People
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

router.get('/personById/:id', authenticatToken, async (req, res) => {
    try{
        const person = await PeopleControllers.getPersonById(req.params.id);
        res.send(person);
    } catch (e){
        console.log(e);
    }
});

/**
 * @swagger
 * /people/addPerson:
 *  post:
 *      summary: Добавить человека в список
 *      tags:
 *        - People
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: Person
 *          required: true
 *          description: Добавить объект со свойствами
 *          schema:
 *              $ref: '#/definitions/Person'
 *      responses:
 *          '200':
 *              description: Успешный ответ
 * definitions:
 *  Person:
 *      type: object
 *      required:
 *          - id
 *          - name
 *          - age
 *          - country
 *          - gender
 *      properties:
 *          id: 
 *              type: integer
 *          name: 
 *              type: string
 *          age: 
 *              type: integer
 *          country:
 *              type: string
 *          gender:
 *              type: string
 */ 

router.post('/addPerson', authenticatToken, async (req, res) => {
    try {
        const answer = await PeopleControllers.addPerson(req.body);
        res.send(answer);
    } catch (e) {
        console.log(e);
    }
});

/**
 * @swagger
 * /people/editPerson/{id}:
 *  put:
 *      summary: Заменить человека в списке
 *      tags:
 *        - People
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Указать id который нужно заменить
 *          type: integer
 *        - in: body
 *          name: Person
 *          required: true
 *          description: Объект для замены  
 *          schema:
 *              $ref: '#/definitions/Person'
 *      responses:
 *          '200':
 *              description: Успешный ответ
 * definitions:
 *  Person:
 *      type: object
 *      required:
 *          - id
 *          - name
 *          - age
 *          - country
 *          - gender
 *      properties:
 *          id: 
 *              type: integer
 *          name: 
 *              type: string
 *          age: 
 *              type: integer
 *          country:
 *              type: string
 *          gender:
 *              type: string
 */ 

router.put('/editPerson/:id', authenticatToken, async (req, res) => {
    try {
        const answer = await PeopleControllers.editPerson(req.params.id, req.body);
        res.send(answer);
    } catch (e) {
        console.log(e);
    }
});

/**
 * @swagger
 * /people/deletePerson/{id}:
 *  delete:
 *      summary: Удалить человека из списка
 *      tags:
 *        - People
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

router.delete('/deletePerson/:id', authenticatToken, async (req, res) => {
    try {
        const answer = await PeopleControllers.deletePerson(req.params.id);
        res.send(answer);
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;