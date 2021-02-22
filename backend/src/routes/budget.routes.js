const express = require('express');
const router = express.Router(); 
const budgetCtrl = require('../controller/budgetCtrl');

router.get('/', budgetCtrl.getMovements);
router.get('/id/:id', budgetCtrl.getMovement);
router.get('/type/:type', budgetCtrl.getMovementsByType);
router.post('/add', budgetCtrl.createMovement);
router.put('/update/:id', budgetCtrl.editMovement);
router.delete('/erase/:id', budgetCtrl.eraseMovement);

module.exports = router;