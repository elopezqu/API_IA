const db = require('../db');

const Client = {
  create: (name, phone, callback) => {
    const query = 'INSERT INTO clients (name, phone) VALUES (?, ?)';
    db.query(query, [name, phone], (err, result) => {
      callback(err, result);
    });
  },
  findById: (id, callback) => {
    const query = 'SELECT * FROM clients WHERE id = ?';
    db.query(query, [id], (err, results) => {
      callback(err, results[0]);
    });
  },
  findAll: (callback) => {
    const query = 'SELECT * FROM clients';
    db.query(query, (err, results) => {
      callback(err, results);
    });
  },
  update: (id, name, phone, callback) => {
    const query = 'UPDATE clients SET name = ?, phone = ? WHERE id = ?';
    db.query(query, [name, phone, id], (err, result) => {
      callback(err, result);
    });
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM clients WHERE id = ?';
    db.query(query, [id], (err, result) => {
      callback(err, result);
    });
  }
};

module.exports = Client;
