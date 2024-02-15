// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// const PORT = 3007;

// const users = [
//   { username: "user1", password: "password1" },
//   { username: "user2", password: "password2" },
// ];

// app.use(bodyParser.json());

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find((user) => user.username === username);
//   if (!user || user.password !== password) {
//     return res.status(401).json({ message: "Invalid username or password" });
//   }
//   return res.status(200).json({ message: "Login successful" });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

// MySQL database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bhanu@123',
    database: 'bhanu'
});

// Connect to the database
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Register API - Insert user data into MySQL database
app.post('/register', (req, res) => {
    const { username, password, email } = req.body;
    const sql = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
    connection.query(sql, [username, password, email], (err, result) => {
        if (err) {
            console.error('Error registering user:', err);
            return res.status(500).json({ message: 'Error registering user' });
        }
        res.status(201).json({ message: 'User registered successfully' });
    });
});

// Login API - Validate credentials against MySQL database
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error('Error logging in:', err);
            return res.status(500).json({ message: 'Error logging in' });
        }
        if (result.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        res.status(200).json({ message: 'Login successful' });
    });
});

// Get Users API - Fetch user data from MySQL database
app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error getting users:', err);
            return res.status(500).json({ message: 'Error getting users' });
        }
        res.status(200).json(results);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

