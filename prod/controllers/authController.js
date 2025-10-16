const { AdminUser } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const catchAsync = require('../utils/catchAsync');

// À n'utiliser qu'une seule fois pour créer votre premier admin !
exports.register = catchAsync(async (req, res) => {
  const { username, password, role } = req.body;
  const user = await AdminUser.create({ username, password, role });
  res.status(201).json({ success: true, message: 'Admin créé. Supprimez cette route en production !' });
});

exports.login = catchAsync(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: 'Identifiants requis' });

  const user = await AdminUser.findOne({ where: { username } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Identifiants invalides' });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '8h'
  });

  res.status(200).json({ success: true, token, user: { id: user.id, username: user.username, role: user.role } });
});
