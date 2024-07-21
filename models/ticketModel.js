const db = require('../db');

const Ticket = {
  create: (user_id, entry_date, exit_date, vehicle_plate, total_amount, callback) => {
    const query = 'INSERT INTO tickets (user_id, entry_date, exit_date, vehicle_plate, total_amount) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [user_id, entry_date, exit_date, vehicle_plate, total_amount], (err, result) => {
      callback(err, result);
    });
  },
  findById: (id, callback) => {
    const query = 'SELECT * FROM tickets WHERE id = ?';
    db.query(query, [id], (err, results) => {
      callback(err, results[0]);
    });
  },
  findAll: (callback) => {
    const query = 'SELECT * FROM tickets';
    db.query(query, (err, results) => {
      callback(err, results);
    });
  },
  update: (id, user_id, entry_date, exit_date, vehicle_plate, total_amount, callback) => {
    const query = 'UPDATE tickets SET user_id = ?, entry_date = ?, exit_date = ?, vehicle_plate = ?, total_amount = ? WHERE id = ?';
    db.query(query, [user_id, entry_date, exit_date, vehicle_plate, total_amount, id], (err, result) => {
      callback(err, result);
    });
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM tickets WHERE id = ?';
    db.query(query, [id], (err, result) => {
      callback(err, result);
    });
  }
};

module.exports = Ticket;
