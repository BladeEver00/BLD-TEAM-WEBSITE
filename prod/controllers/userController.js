const { AdminUser } = require('../models');
const catchAsync = require('../utils/catchAsync');

exports.createUser = catchAsync(async (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ message: 'Veuillez fournir un nom d\'utilisateur, un mot de passe et un rôle.' });
  }

  if (!['admin', 'editor'].includes(role)) {
    return res.status(400).json({ message: 'Le rôle doit être "admin" ou "editor".' });
  }

  const userExists = await AdminUser.findOne({ where: { username } });
  if (userExists) {
    return res.status(400).json({ message: 'Ce nom d\'utilisateur est déjà pris.' });
  }

  const newUser = await AdminUser.create({ username, password, role });

  const userResponse = {
    id: newUser.id,
    username: newUser.username,
    role: newUser.role,
    createdAt: newUser.createdAt
  };

  res.status(201).json({ success: true, data: userResponse });
});

exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await AdminUser.findAll({
    attributes: { exclude: ['password'] }
  });
  res.status(200).json({ success: true, count: users.length, data: users });
});