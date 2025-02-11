// routes/registrationRoutes.js
const express = require('express');
const router = express.Router();
const { registerDoctor, registerPatient } = require('../controllers/registrationController');
const { protect } = require('../middleware/authMiddleware');

router.post('/doctor', protect, registerDoctor);
router.post('/patient', protect, registerPatient);

module.exports = router;