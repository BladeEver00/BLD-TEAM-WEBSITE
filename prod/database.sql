-- ================================================================= --
--         FICHIER DE PEUPLEMENT POUR LA BASE DE DONNÉES BLD TEAM      --
-- ================================================================= --
-- Ce script insère des données d'exemple pour les tables Matches et Media.
-- NOTE: Les tables sont créées automatiquement par Sequelize au démarrage du serveur.
-- Ce script doit être exécuté APRÈS le premier démarrage du serveur.
-- Les dates sont au format 'YYYY-MM-DD HH:MM:SS'.

-- Utiliser la base de données correcte
USE bld_team_db;

-- ============================================
-- PEUPLEMENT DE LA TABLE `Matches`
-- ============================================
INSERT INTO `Matches` (`id`, `opponent`, `result`, `scoreTeam`, `scoreOpponent`, `type`, `duration`, `date`, `kills`, `deaths`, `assists`, `gold`, `mvp`, `mvpKda`, `createdAt`, `updatedAt`) VALUES
(1, 'Rival Team', 'Victoire', 2, 0, 'Tournoi', '28:45', '2025-10-15 20:00:00', 35, 12, 80, 68, 'ToxicJungler', '12/2/15', NOW(), NOW()),
(2, 'Solaris Gaming', 'Victoire', 1, 0, 'Ranked', '32:10', '2025-10-12 21:30:00', 28, 15, 65, 72, 'HeimerBender', '10/3/8', NOW(), NOW()),
(3, 'Team Eclipse', 'Défaite', 1, 2, 'Tournoi', '45:30', '2025-10-10 19:00:00', 22, 30, 50, 65, NULL, NULL, NOW(), NOW()),
(4, 'Quantum Esports', 'Victoire', 1, 0, 'Scrim', '25:00', '2025-10-08 22:00:00', 25, 8, 55, 61, 'LeSupport', '2/0/20', NOW(), NOW()),
(5, 'Omega Crew', 'Victoire', 2, 1, 'Tournoi', '38:15', '2025-10-05 20:00:00', 42, 25, 95, 81, 'ToxicJungler', '15/4/18', NOW(), NOW());

-- ============================================
-- PEUPLEMENT DE LA TABLE `Media`
-- ============================================
INSERT INTO `Media` (`id`, `type`, `title`, `description`, `url`, `duration`, `player`, `date`, `createdAt`, `updatedAt`) VALUES
(1, 'video', 'Pentakill Épique en Finale', 'Action décisive qui nous a menés à la victoire', 'https://youtube.com/watch?v=example1', '5:32', NULL, '2025-10-15 12:00:00', NOW(), NOW()),
(2, 'video', 'Highlights - Saison 2025', 'Compilation des meilleurs moments de la saison', 'https://youtube.com/watch?v=example2', '12:45', NULL, '2025-10-10 12:00:00', NOW(), NOW()),
(3, 'image', 'Victoire Finale', 'L\'équipe soulevant le trophée', 'https://imgur.com/example.jpg', NULL, NULL, '2025-10-15 12:00:00', NOW(), NOW()),
(4, 'image', 'Équipe Réunie', 'Photo officielle de la saison', 'https://imgur.com/example2.jpg', NULL, NULL, '2025-10-01 12:00:00', NOW(), NOW()),
(5, 'clip', 'Outplay 1v3 Incroyable', 'Un move légendaire en midlane.', 'https://twitch.tv/clip/example1', NULL, 'HeimerBender', '2025-10-12 12:00:00', NOW(), NOW()),
(6, 'clip', 'Vol de Baron à la Dernière Seconde', 'Le smite qui a tout changé.', 'https://twitch.tv/clip/example2', NULL, 'ToxicJungler', '2025-10-10 12:00:00', NOW(), NOW());

