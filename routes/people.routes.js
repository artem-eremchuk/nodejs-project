const express = require('express');
const router = express.Router();
const PeopleControllers = require('../controllers/people.controllers');

router.get('/', async (req, res) => {
    try{
        const people = await PeopleControllers.getPeople();
        res.send(people);
    } catch (e){
        console.log(e);
    }
});

router.get('/personById/:id', async (req, res) => {
    try{
        const person = await PeopleControllers.getPersonById(req.params.id);
        res.send(person);
    } catch (e){
        console.log(e);
    }
});

router.post('/addPerson', async (req, res) => {
    try {
        const answer = await PeopleControllers.addPerson(req.body);
        res.send(answer);
    } catch (e) {
        console.log(e);
    }
});

router.put('/editPerson/:id', async (req, res) => {
    try {
        const answer = await PeopleControllers.editPerson(req.params.id, req.body);
        res.send(answer);
    } catch (e) {
        console.log(e);
    }
});

router.delete('/deletePerson/:id', async (req, res) => {
    try {
        const answer = await PeopleControllers.deletePerson(req.params.id);
        res.send(answer);
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;