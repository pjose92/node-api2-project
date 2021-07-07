const express = require('express');
const routes = require('./Posts/postsRouter');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).send("Server is up and running!");
});

server.use("/api/posts", routes);

const PORT = 4000;

server.listen(4000, () => {
    console.log(` Jose's Server Is Running On Port ${PORT}! `)
});