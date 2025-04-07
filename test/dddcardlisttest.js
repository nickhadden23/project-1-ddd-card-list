const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from src
app.use(express.static('src'));

// Handle all routes by sending index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Serving from: ${path.join(__dirname, 'src')}`);
});