const express = require('express');
const clientController = require('../controllers/clientController');

const router = express.Router();

router.post('/create', clientController.createClient);
router.get('/:id', clientController.getClient);
router.get('/', clientController.getAllClients);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;
