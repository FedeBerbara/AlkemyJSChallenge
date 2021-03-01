const express = require('express');
const router = express.Router(); 
const userCtrl = require('../controller/userCtrl');

router.post('/signin', userCtrl.signin);
router.post('/signup', userCtrl.signup);

module.exports = router;