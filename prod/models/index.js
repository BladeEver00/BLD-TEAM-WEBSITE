const sequelize = require('../config/database');
const AdminUser = require('./AdminUser')
const Application = require('./Application');
const Match = require('./Match');
const Media = require('./Media');

const News = require('./News');
const db = {
  sequelize,
  Sequelize: sequelize.Sequelize,
  AdminUser,
  Application,
  Match,
  Media,
  News,
  
};

// Ici, on pourra définir les relations entre les tables plus tard si besoin
// Ex: Player.hasMany(Match)

module.exports = db;