-- ================================================================= --
--         SCHEMA COMPLET POUR LA BASE DE DONNÉES BLD TEAM           --
-- Compatible avec MySQL / MariaDB (phpMyAdmin)                    --
-- ================================================================= --

-- --------------------------------------------------------
-- Structure de la table `Applications`
-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `Applications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rank` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `champions` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `availability` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `discord` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('pending','reviewed','accepted','rejected') COLLATE utf8mb4_unicode_ci DEFAULT 'pending',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- --------------------------------------------------------
-- Structure de la table `Matches`
-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `Matches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `opponent` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `result` enum('Victoire','Défaite') COLLATE utf8mb4_unicode_ci NOT NULL,
  `scoreTeam` int(11) NOT NULL,
  `scoreOpponent` int(11) NOT NULL,
  `type` enum('Ranked','Tournoi','Scrim') COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` datetime NOT NULL,
  `kills` int(11) DEFAULT NULL,
  `deaths` int(11) DEFAULT NULL,
  `assists` int(11) DEFAULT NULL,
  `gold` int(11) DEFAULT NULL,
  `mvp` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mvpKda` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- --------------------------------------------------------
-- Structure de la table `Media`
-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `Media` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` enum('video','image','clip') COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `player` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- --------------------------------------------------------
-- Structure de la table `News`
-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `News` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `imageUrl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'BLD TEAM Staff',
  `date` datetime NOT NULL,
  `status` enum('published','draft') COLLATE utf8mb4_unicode_ci DEFAULT 'published',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;