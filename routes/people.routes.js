const express = require('express');
const router = express.Router();
const PeopleControllers = require('../controllers/people.controller');

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

module.exports = router;