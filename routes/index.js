const express = require('express');
const router = express.Router();
const peopleRoutes = require('./people.routes');
const messageRoutes = require('./message.routes');
const usersRoutes = require('./users.routes');

router.use('/people', peopleRoutes);
router.use('/messages', messageRoutes);
router.use('/users', usersRoutes);

module.exports = router;