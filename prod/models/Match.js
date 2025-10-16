const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Match = sequelize.define('Match', {
  opponent: { type: DataTypes.STRING, allowNull: false },
  result: { type: DataTypes.ENUM('Victoire', 'Défaite'), allowNull: false },
  scoreTeam: { type: DataTypes.INTEGER, allowNull: false },
  scoreOpponent: { type: DataTypes.INTEGER, allowNull: false },
  type: { type: DataTypes.ENUM('Ranked', 'Tournoi', 'Scrim'), allowNull: false },
  duration: { type: DataTypes.STRING },
  date: { type: DataTypes.DATE, allowNull: false },
  kills: { type: DataTypes.INTEGER },
  deaths: { type: DataTypes.INTEGER },
  assists: { type: DataTypes.INTEGER },
  gold: { type: DataTypes.INTEGER },
  mvp: { type: DataTypes.STRING },
  mvpKda: { type: DataTypes.STRING }
}, { timestamps: true });

module.exports = Match;