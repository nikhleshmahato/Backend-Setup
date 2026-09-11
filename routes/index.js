const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET all data from DB
router.get('/login-get', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ data: results });
  });
});

// POST store name and roll no in DB
router.post('/users-post', (req, res) => {
  const { name, roll_no } = req.body;
  if (!name || !roll_no) {
    return res.status(400).json({ error: 'Name and roll_no are required' });
  }

  const sql = 'INSERT INTO users (name, roll_no) VALUES (?, ?)';
  db.query(sql, [name, roll_no], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, name, roll_no });
  });
});

module.exports = router;