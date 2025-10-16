const express = require('express');
const router = express.Router();
const { createUser, getAllUsers } = require('../controllers/userController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, authorize('admin'), getAllUsers) // Seuls les admins peuvent voir la liste
  .post(protect, authorize('admin'), createUser); // Seuls les admins peuvent créer un utilisateur

module.exports = router;