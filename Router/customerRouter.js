const express = require('express');
const router = express.Router();

const custController = require('../Controller/customer');

var cors = require('cors')
router.use(cors())

router.get('/allcustomer',custController.getAll);

router.post('/addcustomer',custController.addCustomer);

module.exports = router;