const express = require('express');
const router = express.Router();
const { getMatchStats } = require('../controllers/statsController');
router.route('/matches').get(getMatchStats);
module.exports = router;