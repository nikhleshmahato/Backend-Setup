const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.message);
  } else {
    console.log('Connected to MySQL database.');
    
    // Initialize table
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        roll_no VARCHAR(100) NOT NULL
      )
    `;
    db.query(createTableQuery, (err) => {
      if (err) console.error('Error creating table:', err.message);
    });
  }
});

module.exports = db;