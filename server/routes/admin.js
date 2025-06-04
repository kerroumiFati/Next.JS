// routes/insertRoutes.js
const express = require('express');
const Controller = require('../controllers/admin');
const router = express.Router();




router.post('/insertData', Controller.insertData);
router.get('/GetEmployer', Controller.GetEmployer);
router.get('/GetLogin', Controller.GetLogin);
router.post('/addRole', Controller.insertRole);

router.get('/GetRole', Controller.GetRole);




module.exports = router;
