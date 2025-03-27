const express = require('express');
const app = express();
const posts = require('./data/posts.js');
const port = 3000;


app.use(express.static('public'));


// GET homepage
app.get('/', (req, res) => {
  console.log('Sto chiamando la Hompage del mio blog');
  res.send('Server del mio blog');
});







app.listen(3000, () => {
  console.log(`Server in ascolto alla porta ${port}`);
});