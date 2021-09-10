const express = require('express');
const path = require('path');
const { createServer: createViteServer } = require('vite');
const PORT = 3001;

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});


