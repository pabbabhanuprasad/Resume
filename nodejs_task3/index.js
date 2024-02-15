const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Dummy user data stored in local storage (replace this with your actual user data)
const users = [
  { username: 'Bhanu', password: 'Bhanu@123' }
  
];

// Middleware to parse JSON body
app.use(bodyParser.json());

// Route for login API
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are provided
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Find user in the user data
  const user = users.find(u => u.username === username && u.password === password);

  // Check if user exists
  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // Respond with success message
  return res.status(200).json({ message: 'Login successful' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
