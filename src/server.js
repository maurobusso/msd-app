"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const app = (0, express_1.default)();
// Create a MySQL connection
const db = mysql_1.default.createConnection({
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
