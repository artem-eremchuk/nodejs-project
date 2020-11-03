const express = require('express');
const router = express.Router();
const MessageControllers = require('../controllers/message.controller');

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

module.exports = router;