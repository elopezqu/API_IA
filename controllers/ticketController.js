const Ticket = require('../models/ticketModel');

const createTicket = (req, res) => {
  const { user_id, entry_date, exit_date, vehicle_plate, total_amount } = req.body;

  Ticket.create(user_id, entry_date, exit_date, vehicle_plate, total_amount, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Ticket created', ticketId: result.insertId });
  });
};

const getTicket = (req, res) => {
  const { id } = req.params;

  Ticket.findById(id, (err, ticket) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    res.json(ticket);
  });
};

const getAllTickets = (req, res) => {
  Ticket.findAll((err, tickets) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    res.json(tickets);
  });
};

const updateTicket = (req, res) => {
  const { id } = req.params;
  const { user_id, entry_date, exit_date, vehicle_plate, total_amount } = req.body;

  Ticket.update(id, user_id, entry_date, exit_date, vehicle_plate, total_amount, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    res.json({ message: 'Ticket updated' });
  });
};

const deleteTicket = (req, res) => {
  const { id } = req.params;

  Ticket.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    res.json({ message: 'Ticket deleted' });
  });
};

module.exports = {
  createTicket,
  getTicket,
  getAllTickets,
  updateTicket,
  deleteTicket
};
