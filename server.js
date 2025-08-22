// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const info = require('./models/info'); // Import the model
const experience = require('./models/experience'); // <-- ADD THIS LINE

const app = express();
const PORT = process.env.PORT || 3000;

// Prettify json
app.set('json spaces', 2);

// X-robots-tag to prevent bot scraping
app.use((req, res, next) => {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  next();
});

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- API Route ---
app.get('/info', async (req, res) => {
  try {
    // We use findOne since there will only be one document with your info
    const myInfo = await info.findOne();
    if (!myInfo) {
      return res.status(404).json({ message: 'Information not found.' });
    }
    res.json(myInfo);
  } catch (error) {
    res.status(500).json({ message: 'Server error.' });
  }
});

// --- API Route ---
app.get('/experience', async (req, res) => {
  try {
    const myExperience = await experience.findOne();
    if (!myExperience) {
      return res.status(404).json({ message: 'Experience not found.' });
    }
    res.json(myExperience);
  } catch (error) {
    res.status(500).json({ message: 'Server error.' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});