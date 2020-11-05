const express = require('express');
const router = express.Router();
const MessageControllers = require('../controllers/message.controllers');

router.get('/', async (req, res) => {
    try {
        const messages = await MessageControllers.getMessages();
        res.send(messages);
    } catch (e) {
        console.log(e);
    }
});

router.get('/messageById/:id', async (req, res) => {
    try{
        const message = await MessageControllers.getMessageById(req.params.id);
        res.send(message);
    } catch (e){
        console.log(e);
    }
});

router.post('/addMessage', async (req, res) => {
    try {
        const answer = await MessageControllers.addMessage(req.body);
        res.send(answer);
    } catch (e) {
        console.log(e);
    }
});

router.put('/editMessage/:id', async (req, res) => {
    try {
        const answer = await MessageControllers.editMessage(req.params.id, req.body);
        res.send(answer);
    } catch (e) {
        console.log(e);
    }
});

router.delete('/deleteMessage/:id', async (req, res) => {
    try {
        const answer = await MessageControllers.deleteMessage(req.params.id);
        res.send(answer);
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;