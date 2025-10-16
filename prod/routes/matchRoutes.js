const express = require('express');
const router = express.Router();
const { getAllMatches } = require('../controllers/matchController');
router.route('/').get(getAllMatches);
module.exports = router;