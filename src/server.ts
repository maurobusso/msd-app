import express, { Request, Response } from 'express';
import mysql from 'mysql';
const app = express();

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

// API endpoint to insert data into the database
app.post('/insertData', (req, res) => {
  const data = req.body; // Data to insert
  // Perform the database insertion here
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
