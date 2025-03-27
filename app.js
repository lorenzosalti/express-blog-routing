const express = require('express');
const app = express();
const posts = require('./data/posts.js');
const port = 3000;


app.listen(3000, () => {
  console.log(`Server in ascolto alla porta ${port}`);
});