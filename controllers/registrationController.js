// controllers/registrationController.js
const MedicalUser = require('../models/MedicalUser');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');

const registerDoctor = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, specialization, degree, college, experience, phone } = req.body;

    const doctor = await Doctor.create({
      userId,
      name,
      specialization,
      degree,
      college,
      experience,
      phone
    });

    await MedicalUser.findByIdAndUpdate(userId, { isRegistrationComplete: true });

    res.status(201).json({ doctor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const registerPatient = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, age, bloodGroup, phone, address, emergencyContact } = req.body;

    const patient = await Patient.create({
      userId,
      name,
      age,
      bloodGroup,
      phone,
      address,
      emergencyContact
    });

    await MedicalUser.findByIdAndUpdate(userId, { isRegistrationComplete: true });

    res.status(201).json({ patient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerDoctor, registerPatient };