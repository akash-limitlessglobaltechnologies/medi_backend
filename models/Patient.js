// models/Patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MedicalUser',
    required: true
  },
  name: String,
  age: Number,
  bloodGroup: String,
  phone: String,
  address: String,
  emergencyContact: String
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);