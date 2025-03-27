const express = require('express');
const app = express();
const posts = require('./data/posts.js');
const port = 3000;


// GET homepage
app.get('/', (req, res) => {

  console.log('Sto chiamando la Hompage del mio blog');

  res.send('Server del mio blog');

});

// GET bacheca
app.get('/bacheca', (req, res) => {

  console.log('Sto chiamando la Bacheca del mio blog');

  res.json(posts);

});



app.listen(3000, () => {
  console.log(`Server in ascolto alla porta ${port}`);
});