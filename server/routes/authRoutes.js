const express = require('express');
const router = express.Router();
const authService = require('../controllers/authController');

router.post('/login', authService.login);

module.exports = router;
