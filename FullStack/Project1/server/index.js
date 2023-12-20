const express = require("express");
const app = express();

// Import Routers
const postRouter = require('./routes/Posts');

// Middleware
app.use(express.json());
app.use('/posts', postRouter); // Use postRouter for /posts endpoint

const db = require("./models");

db.sequelize.sync().then(() => {
    app.listen(3002, () => {
        console.log("Our server is running at 3002 port");
    });
});
