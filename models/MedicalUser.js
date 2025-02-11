// models/MedicalUser.js
const mongoose = require('mongoose');

const medicalUserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ['doctor', 'patient'],
    default: null
  },
  isRegistrationComplete: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('MedicalUser', medicalUserSchema);