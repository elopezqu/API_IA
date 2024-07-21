const Earning = require('../models/earningModel');

const createEarning = (req, res) => {
  const { month, total_amount, associated_tickets } = req.body;

  Earning.create(month, total_amount, associated_tickets, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Earning created', earningId: result.insertId });
  });
};

const getEarning = (req, res) => {
  const { id } = req.params;

  Earning.findById(id, (err, earning) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (!earning) {
      return res.status(404).json({ error: 'Earning not found' });
    }

    res.json(earning);
  });
};

const getAllEarnings = (req, res) => {
  Earning.findAll((err, earnings) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    res.json(earnings);
  });
};

const updateEarning = (req, res) => {
  const { id } = req.params;
  const { month, total_amount, associated_tickets } = req.body;

  Earning.update(id, month, total_amount, associated_tickets, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Earning not found' });
    }

    res.json({ message: 'Earning updated' });
  });
};

const deleteEarning = (req, res) => {
  const { id } = req.params;

  Earning.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Earning not found' });
    }

    res.json({ message: 'Earning deleted' });
  });
};

module.exports = {
  createEarning,
  getEarning,
  getAllEarnings,
  updateEarning,
  deleteEarning
};
