const { News } = require('../models');
const catchAsync = require('../utils/catchAsync');


exports.getAllNews = catchAsync(async (req, res) => {
  const news = await News.findAll({
    where: { status: 'published' },
    order: [['date', 'DESC']] // Les plus récentes en premier
  });
  res.status(200).json({ success: true, count: news.length, data: news });
});

exports.createNews = catchAsync(async (req, res) => {
  const { title, slug, excerpt, content, category, date } = req.body;
  if (!title || !slug || !excerpt || !content || !category || !date) {
    return res.status(400).json({ message: 'Veuillez remplir tous les champs requis.' });
  }

  const newArticle = await News.create(req.body);
  res.status(201).json({ success: true, data: newArticle });
});