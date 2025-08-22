// models/Info.js
const mongoose = require("mongoose");

// --- Main schema ---
const infoSchema = new mongoose.Schema({
  personal_info: {
    name: String,
    email: String,
    hobbies: [String], // An array of strings
  },
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

module.exports = mongoose.model("info", infoSchema);
