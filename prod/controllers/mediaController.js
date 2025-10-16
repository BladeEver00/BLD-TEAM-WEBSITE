const { Media } = require('../models');
const catchAsync = require('../utils/catchAsync');

exports.getAllMedia = catchAsync(async (req, res) => {
  const { type } = req.query;
  const whereClause = type ? { type } : {};

  const media = await Media.findAll({
    where: whereClause,
    order: [['date', 'DESC']]
  });
  res.status(200).json({ success: true, count: media.length, data: media });
});