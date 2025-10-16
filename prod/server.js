require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { sequelize } = require('./models');
const errorHandler = require('./middleware/errorHandler');

// --- INITIALISATION DE L'APP ---
const app = express();
const PORT = process.env.PORT || 5000;

// --- MIDDLEWARES DE SÉCURITÉ ---
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- ROUTES DE L'API ---
app.use('/api/applications', require('./routes/applicationRoutes'));
app.use('/api/matches', require('./routes/matchRoutes'));
app.use('/api/media', require('./routes/mediaRoutes'));
app.use('/api/stats', require('./routes/statsRoutes'));
app.use('/api/news', require('./routes/newsRoutes')); 

// --- GESTION D'ERREURS (DOIT ÊTRE APRÈS LES ROUTES) ---
app.use(errorHandler);

// --- DÉMARRAGE DU SERVEUR ---
const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données MySQL réussie.');
    // await sequelize.sync({ force: true }); // ATTENTION: Ecrase les tables. Utiliser en dev seulement.
    await sequelize.sync({ alter: true }); // Met à jour les tables sans perte de données
    console.log("Synchronisation des modèles avec la base de données réussie.");
    app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
  } catch (error) {
    console.error('Impossible de démarrer le serveur:', error);
  }
};

start();