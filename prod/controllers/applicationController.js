const { Application } = require('../models');
const catchAsync = require('../utils/catchAsync');

exports.submitApplication = catchAsync(async (req, res) => {
  const { pseudo, email, role, rank, availability, message, discord } = req.body;
  if (!pseudo || !email || !role || !rank || !availability || !message || !discord) {
    return res.status(400).json({ message: 'Veuillez remplir tous les champs obligatoires.' });
  }

  const newApplication = await Application.create(req.body);
  res.status(201).json({ success: true, message: 'Candidature envoyée avec succès !', data: newApplication });
});