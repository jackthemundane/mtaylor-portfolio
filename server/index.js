const express = require('express');
const app = express();
const PORT = 5000;

// This is a "Route". When you visit the root URL, this runs.
app.get('/', (req, res) => {
  res.send('The mtaylor-portfolio backend is officially online!');
});

app.listen(PORT, () => {
  console.log(`Server is running locally at http://localhost:${PORT}`);
});