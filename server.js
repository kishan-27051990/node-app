const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from inside the very basic Node app!. Changes made by Kishan</h1>
  `);
})

app.listen(3000);