// routes/deliveryRoutes.js

const express = require('express');
const router = express.Router();
const DeliveryController = require('../controllers/deliveryController');

router.get('/deliveryTime', DeliveryController.fetchDeliveryTime);

module.exports = router;
