const express = require('express');
const router = express.Router();

const broController = require('../Controller/broker');

router.get('/allbroker',broController.getAllBrokers);
router.post('/addbroker',broController.addBroker);

module.exports = router;