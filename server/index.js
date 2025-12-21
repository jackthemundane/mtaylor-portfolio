require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

app.use(cors({ origin: 'https://dev.mtaylor.design' }));
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas (Dev)'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

app.get('/', (req, res) => {
  res.send('Backend says: The mtaylor-portfolio backend is officially online and connected to the database!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
