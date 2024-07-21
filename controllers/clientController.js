const Client = require('../models/clientModel');

const createClient = (req, res) => {
  const { name, phone } = req.body;

  Client.create(name, phone, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Client created', clientId: result.insertId });
  });
};

const getClient = (req, res) => {
  const { id } = req.params;

  Client.findById(id, (err, client) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }

    res.json(client);
  });
};

const getAllClients = (req, res) => {
  Client.findAll((err, clients) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    res.json(clients);
  });
};

const updateClient = (req, res) => {
  const { id } = req.params;
  const { name, phone } = req.body;

  Client.update(id, name, phone, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Client not found' });
    }

    res.json({ message: 'Client updated' });
  });
};

const deleteClient = (req, res) => {
  const { id } = req.params;

  Client.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Client not found' });
    }

    res.json({ message: 'Client deleted' });
  });
};

module.exports = {
  createClient,
  getClient,
  getAllClients,
  updateClient,
  deleteClient
};
