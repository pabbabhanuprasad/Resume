const express = require('express');
const router = express.Router();
const { Posts } = require("../models/Post");

router.get("/", (req, res) => {
    res.json("Hello World");
});

router.post("/", async (req, res) => {
    try {
        const post = req.body;
        let name=post.name;
        let gender=post.gender;
        console.log(name,gender);
        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error creating post" });
    }
});

module.exports = router;
