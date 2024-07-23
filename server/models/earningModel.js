const db = require('../db');

const Earning = {
  create: (month, total_amount, associated_tickets, callback) => {
    const query = 'INSERT INTO earnings (month, total_amount, associated_tickets) VALUES (?, ?, ?)';
    db.query(query, [month, total_amount, JSON.stringify(associated_tickets)], (err, result) => {
      callback(err, result);
    });
  },
  findById: (id, callback) => {
    const query = 'SELECT * FROM earnings WHERE id = ?';
    db.query(query, [id], (err, results) => {
      callback(err, results[0]);
    });
  },
  findAll: (callback) => {
    const query = 'SELECT * FROM earnings';
    db.query(query, (err, results) => {
      callback(err, results);
    });
  },
  update: (id, month, total_amount, associated_tickets, callback) => {
    const query = 'UPDATE earnings SET month = ?, total_amount = ?, associated_tickets = ? WHERE id = ?';
    db.query(query, [month, total_amount, JSON.stringify(associated_tickets), id], (err, result) => {
      callback(err, result);
    });
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM earnings WHERE id = ?';
    db.query(query, [id], (err, result) => {
      callback(err, result);
    });
  }
};

module.exports = Earning;
