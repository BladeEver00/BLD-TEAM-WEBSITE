const express = require('express');
const router = express.Router();

const { 
  getAllMatches, 
  createMatch, 
  updateMatch, 
  deleteMatch 
} = require('../controllers/matchController');

const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
  .get(getAllMatches)
  .post(protect, authorize('admin', 'editor'), createMatch);

router.route('/:id')
  .put(protect, authorize('admin', 'editor'), updateMatch)
  .delete(protect, authorize('admin'), deleteMatch); // Seul un admin peut supprimer

module.exports = router;