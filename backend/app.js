const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Your React app's URL
  methods: ['GET', 'POST'], // Specify methods if necessary
  allowedHeaders: ['Content-Type', 'Authorization'], // Optional: Add custom headers if needed
}));

app.use(express.json());
app.use(userRoutes);

mongoose.connect('mongodb://localhost:27017/Inventory', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(5000, () => console.log('Server is running on port 5000'));
