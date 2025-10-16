const express = require('express');
const router = express.Router();
const { getAllNews, createNews } = require('../controllers/newsController');

const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
  .get(getAllNews)
  .post(protect, authorize('admin', 'editor'), createNews);

module.exports = router;