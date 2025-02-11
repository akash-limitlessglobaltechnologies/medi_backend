// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { googleAuth, updateRole } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/google', googleAuth);
router.put('/role', protect, updateRole);

module.exports = router;