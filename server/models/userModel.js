// models/userModel.js
const db = require('../db');

const User = {
  create: (username, password, callback) => {
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, password], (err, result) => {
      callback(err, result);
    });
  },
  findByUsername: (username, callback) => {
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], (err, results) => {
      callback(err, results[0]);
    });
  }
};

module.exports = User;
