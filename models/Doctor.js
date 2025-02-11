// models/Doctor.js
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MedicalUser',
    required: true
  },
  name: String,
  specialization: String,
  degree: String,
  college: String,
  experience: String,
  phone: String
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);