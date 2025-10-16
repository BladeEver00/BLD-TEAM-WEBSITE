const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Pour le debug en dev

  // Gérer les erreurs de validation Sequelize
  if (err.name === 'SequelizeValidationError') {
    const messages = err.errors.map(e => e.message);
    return res.status(400).json({ success: false, message: messages });
  }

  res.status(500).json({
    success: false,
    message: 'Erreur interne du serveur. Veuillez réessayer plus tard.'
  });
};

module.exports = errorHandler;