const express = require('express');
const ticketController = require('../controllers/ticketController');

const router = express.Router();

router.post('/create', ticketController.createTicket);
router.get('/:id', ticketController.getTicket);
router.get('/', ticketController.getAllTickets);
router.put('/:id', ticketController.updateTicket);
router.delete('/:id', ticketController.deleteTicket);

module.exports = router;
