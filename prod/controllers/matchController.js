const { Match } = require('../models');
const catchAsync = require('../utils/catchAsync');

// @desc    Récupérer tous les matchs
// @route   GET /api/matches
// @access  Public
exports.getAllMatches = catchAsync(async (req, res) => {
  const matches = await Match.findAll({
    order: [['date', 'DESC']]
  });
  res.status(200).json({ success: true, count: matches.length, data: matches });
});

// @desc    Créer un nouveau match
// @route   POST /api/matches
// @access  Privé (Admin/Editor)
exports.createMatch = catchAsync(async (req, res) => {
  const { opponent, result, scoreTeam, scoreOpponent, type, date } = req.body;

  if (!opponent || !result || !scoreTeam || !scoreOpponent || !type || !date) {
    return res.status(400).json({ message: 'Veuillez remplir tous les champs obligatoires.' });
  }

  const newMatch = await Match.create(req.body);
  res.status(201).json({ success: true, data: newMatch });
});

// @desc    Mettre à jour un match
// @route   PUT /api/matches/:id
// @access  Privé (Admin/Editor)
exports.updateMatch = catchAsync(async (req, res) => {
  const match = await Match.findByPk(req.params.id);

  if (!match) {
    return res.status(404).json({ message: 'Aucun match trouvé avec cet ID.' });
  }

  await match.update(req.body);
  res.status(200).json({ success: true, data: match });
});

// @desc    Supprimer un match
// @route   DELETE /api/matches/:id
// @access  Privé (Admin seulement)
exports.deleteMatch = catchAsync(async (req, res) => {
  const match = await Match.findByPk(req.params.id);

  if (!match) {
    return res.status(404).json({ message: 'Aucun match trouvé avec cet ID.' });
  }

  await match.destroy();
  res.status(200).json({ success: true, data: {} });
});