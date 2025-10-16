const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Media = sequelize.define('Media', {
  type: { type: DataTypes.ENUM('video', 'image', 'clip'), allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  url: { type: DataTypes.STRING, allowNull: false }, // Lien vers la vidéo/image/clip
  duration: { type: DataTypes.STRING }, // Pour les vidéos
  player: { type: DataTypes.STRING }, // Pour les clips
  date: { type: DataTypes.DATE, allowNull: false }
}, { timestamps: true });

module.exports = Media;