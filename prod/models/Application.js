const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Application = sequelize.define('Application', {
  pseudo: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, validate: { isEmail: true } },
  role: { type: DataTypes.STRING, allowNull: false },
  rank: { type: DataTypes.STRING, allowNull: false },
  champions: { type: DataTypes.STRING },
  availability: { type: DataTypes.TEXT, allowNull: false },
  message: { type: DataTypes.TEXT, allowNull: false },
  discord: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.ENUM('pending', 'reviewed', 'accepted', 'rejected'), defaultValue: 'pending' }
}, { timestamps: true });

module.exports = Application;