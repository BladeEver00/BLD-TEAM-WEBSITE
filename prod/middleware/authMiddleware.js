const jwt = require('jsonwebtoken');
const { AdminUser } = require('../models');
const catchAsync = require('../utils/catchAsync');

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await AdminUser.findByPk(decoded.id, { attributes: { exclude: ['password'] } });

  if (!req.user) {
    return res.status(401).json({ message: 'User belonging to this token does no longer exist.' });
  }
  next();
});

exports.authorize = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: `User role ${req.user.role} is not authorized to access this route` });
  }
  next();
};