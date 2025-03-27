const express = require('express');
const app = express();
const postsRouter = require('./routers/posts.js');
const port = 3000;


app.use(express.static('public'));


// homepage
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

app.use('/posts', postsRouter);




app.listen(3000, () => {
  console.log(`Server in ascolto alla porta ${port}`);
});