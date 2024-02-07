const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;

app.use(bodyParser.json());

const registeredUsers = [];

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ error: "Please provide all required information." });
  }

  const newUser = { id: registeredUsers.length + 1, username, email, password };
  registeredUsers.push(newUser);

  res
    .status(201)
    .json({ message: "User registered successfully", user: newUser });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
