const express = require('express');
const router = express.Router();
const peopleRoutes = require('./people.routes');
const messageRoutes = require('./message.routes');

router.use('/people', peopleRoutes);
router.use('/message', messageRoutes);

module.exports = router;