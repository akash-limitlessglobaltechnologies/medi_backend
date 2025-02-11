// controllers/authController.js
const MedicalUser = require('../models/MedicalUser');
const jwt = require('jsonwebtoken');

const googleAuth = async (req, res) => {
  try {
    const { googleId, email } = req.body;
    
    let user = await MedicalUser.findOne({ googleId });
    
    if (!user) {
      user = await MedicalUser.create({
        googleId,
        email
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d'
    });

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        isRegistrationComplete: user.isRegistrationComplete
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRole = async (req, res) => {
  try {
    const { role } = req.body;
    const user = await MedicalUser.findById(req.user.id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.role = role;
    await user.save();

    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { googleAuth, updateRole };