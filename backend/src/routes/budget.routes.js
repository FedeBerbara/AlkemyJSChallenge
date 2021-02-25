const express = require('express');
const router = express.Router(); 
const budgetCtrl = require('../controller/budgetCtrl');

router.post('/add', budgetCtrl.createMovement);
router.get('/', budgetCtrl.getAllMovements);
router.get('/:id', budgetCtrl.getMovement);
router.get('/sorted/sorted', budgetCtrl.getMovementsSorted);
router.get('/type/:type', budgetCtrl.getMovementsByType);
router.put('/:id', budgetCtrl.editMovement);
router.delete('/:id', budgetCtrl.eraseMovement);

module.exports = router;