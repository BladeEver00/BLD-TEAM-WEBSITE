const { Match } = require('../models');
const catchAsync = require('../utils/catchAsync');

exports.getAllMatches = catchAsync(async (req, res) => {
  const matches = await Match.findAll({
    order: [['date', 'DESC']] // Les plus récents d'abord
  });
  res.status(200).json({ success: true, count: matches.length, data: matches });
});