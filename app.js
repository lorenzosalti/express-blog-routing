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

// index
app.get('/posts', (req, res) => {
  res.send('Lista dei post');
});

// show
app.get('/posts/:id', (req, res) => {
  res.send('Dettagli del post ' + req.params.id);
});

// store
app.post('/posts', (req, res) => {
  res.send('Creazione nuovo post');
});

// update
app.put('/posts/:id', (req, res) => {
  res.send('Modifica integrale del post ' + req.params.id);
});

// modify
app.patch('/posts/:id', (req, res) => {
  res.send('Modifica parziale del post ' + req.params.id);
});

// destroy
app.delete('/posts/:id', (req, res) => {
  res.send('Eliminazione del post ' + req.params.id);
});





app.listen(3000, () => {
  console.log(`Server in ascolto alla porta ${port}`);
});