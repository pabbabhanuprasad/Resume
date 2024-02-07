const express = require('express');
const app = express();
const PORT = 3000;


const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];


app.get('/users', (req, res) => {
  res.json(users);
});


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
