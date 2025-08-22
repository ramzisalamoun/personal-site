// models/experience.js
const mongoose = require("mongoose");

// --- Main schema ---
const experienceSchema = new mongoose.Schema({

  current_experience: {
    company: String,
    role: String,
    start_date: String,
  },

  previous_experience: {
    company: String,
    role: String,
    start_date: String,
  },
})
;

module.exports = mongoose.model("experience", experienceSchema);
