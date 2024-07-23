const express = require('express');
const earningController = require('../controllers/earningController');

const router = express.Router();

router.post('/create', earningController.createEarning);
router.get('/:id', earningController.getEarning);
router.get('/', earningController.getAllEarnings);
router.put('/:id', earningController.updateEarning);
router.delete('/:id', earningController.deleteEarning);

module.exports = router;
