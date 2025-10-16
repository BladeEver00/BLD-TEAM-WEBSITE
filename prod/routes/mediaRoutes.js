const express = require('express');
const router = express.Router();
const { getAllMedia } = require('../controllers/mediaController');
router.route('/').get(getAllMedia);
module.exports = router;