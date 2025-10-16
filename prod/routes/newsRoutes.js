const express = require('express');
const router = express.Router();
const { getAllNews } = require('../controllers/newsController');

router.route('/').get(getAllNews);

module.exports = router;