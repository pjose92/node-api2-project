const express = require('express');

const postsRouter = require('./Posts/postsRouter.js');

const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
    res.send(`
        <h2>JP's API</h2>
        <p>Welcome to the Jose's First Blog Posts API</p>
      `);
  });

  module.exports = server;