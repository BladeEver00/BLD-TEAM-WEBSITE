const { News } = require('../models');
const catchAsync = require('../utils/catchAsync');


exports.getAllNews = catchAsync(async (req, res) => {
  const news = await News.findAll({
    where: { status: 'published' },
    order: [['date', 'DESC']] // Les plus récentes en premier
  });
  res.status(200).json({ success: true, count: news.length, data: news });
});