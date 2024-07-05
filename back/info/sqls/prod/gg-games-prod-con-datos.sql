-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.37 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para gg-games
DROP DATABASE IF EXISTS `gg-games-prod`;
CREATE DATABASE IF NOT EXISTS `gg-games-prod` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gg-games-prod`;

-- Volcando estructura para tabla gg-games.accounts
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `firstName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `lastName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `phoneNumber` int DEFAULT NULL,
  `comment` varchar(250) DEFAULT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  `createdBy` int NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedBy` int NOT NULL DEFAULT '0',
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `fk_userId` (`userId`) USING BTREE,
  CONSTRAINT `fk_acounts_users` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla gg-games.accounts: ~0 rows (aproximadamente)
DELETE FROM `accounts`;

-- Volcando estructura para tabla gg-games.contact_descriptions
DROP TABLE IF EXISTS `contact_descriptions`;
CREATE TABLE IF NOT EXISTS `contact_descriptions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `default` tinyint NOT NULL DEFAULT (0),
  `order` tinyint NOT NULL DEFAULT '0',
  `active` tinyint NOT NULL DEFAULT '1',
  `createdBy` int NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedBy` int NOT NULL DEFAULT '0',
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla gg-games.contact_descriptions: ~3 rows (aproximadamente)
DELETE FROM `contact_descriptions`;
INSERT INTO `contact_descriptions` (`id`, `description`, `default`, `order`, `active`, `createdBy`, `createdAt`, `updatedBy`, `updatedAt`) VALUES
	(1, 'Sin descripcion', 1, 0, 1, 0, NULL, 0, NULL),
	(2, 'Trabajo', 0, 0, 1, 0, NULL, 0, NULL),
	(3, 'Principal', 0, 0, 1, 0, NULL, 0, NULL);

-- Volcando estructura para tabla gg-games.countries
DROP TABLE IF EXISTS `countries`;
CREATE TABLE IF NOT EXISTS `countries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `default` tinyint NOT NULL DEFAULT (0),
  `order` tinyint NOT NULL DEFAULT '0',
  `active` tinyint NOT NULL DEFAULT '1',
  `createdBy` int NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedBy` int NOT NULL DEFAULT '0',
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla gg-games.countries: ~0 rows (aproximadamente)
DELETE FROM `countries`;
INSERT INTO `countries` (`id`, `name`, `default`, `order`, `active`, `createdBy`, `createdAt`, `updatedBy`, `updatedAt`) VALUES
	(1, 'Argentina', 1, 0, 1, 0, NULL, 0, NULL);

-- Volcando estructura para tabla gg-games.email_descriptions
DROP TABLE IF EXISTS `email_descriptions`;
CREATE TABLE IF NOT EXISTS `email_descriptions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `default` tinyint NOT NULL DEFAULT (0),
  `order` tinyint NOT NULL DEFAULT '0',
  `active` tinyint NOT NULL DEFAULT '1',
  `createdBy` int NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedBy` int NOT NULL DEFAULT '0',
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla gg-games.email_descriptions: ~2 rows (aproximadamente)
DELETE FROM `email_descriptions`;
INSERT INTO `email_descriptions` (`id`, `description`, `default`, `order`, `active`, `createdBy`, `createdAt`, `updatedBy`, `updatedAt`) VALUES
	(1, 'Sin descripcion', 1, 0, 1, 0, NULL, 0, NULL),
	(3, 'Trabajo', 0, 0, 1, 0, NULL, 0, NULL);

-- Volcando estructura para tabla gg-games.gamers
DROP TABLE IF EXISTS `gamers`;
CREATE TABLE IF NOT EXISTS `gamers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `accountId` int NOT NULL,
  `nickName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  `createdBy` int NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedBy` int NOT NULL DEFAULT '0',
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_accountId` (`accountId`) USING BTREE,
  CONSTRAINT `fk_gamers_accounts` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla gg-games.gamers: ~0 rows (aproximadamente)
DELETE FROM `gamers`;

-- Volcando estructura para tabla gg-games.games
DROP TABLE IF EXISTS `games`;
CREATE TABLE IF NOT EXISTS `games` (
  `id` int NOT NULL AUTO_INCREMENT,
  `gamerId` int NOT NULL,
  `name` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `description` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  `createdBy` int NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedBy` int NOT NULL DEFAULT '0',
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `fk_gamerId` (`gamerId`),
  CONSTRAINT `fk_games_gamers` FOREIGN KEY (`gamerId`) REFERENCES `gamers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla gg-games.games: ~0 rows (aproximadamente)
DELETE FROM `games`;

-- Volcando estructura para tabla gg-games.localities
DROP TABLE IF EXISTS `localities`;
CREATE TABLE IF NOT EXISTS `localities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `provinceId` int NOT NULL,
  `default` tinyint NOT NULL DEFAULT (0),
  `order` tinyint NOT NULL DEFAULT '0',
  `active` tinyint NOT NULL DEFAULT '1',
  `createdBy` int NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedBy` int NOT NULL DEFAULT '0',
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_provincieId` (`provinceId`) USING BTREE,
  CONSTRAINT `fk_localities_provincies` FOREIGN KEY (`provinceId`) REFERENCES `provinces` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla gg-games.localities: ~0 rows (aproximadamente)
DELETE FROM `localities`;

-- Volcando estructura para tabla gg-games.phone_descriptions
DROP TABLE IF EXISTS `phone_descriptions`;
CREATE TABLE IF NOT EXISTS `phone_descriptions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `default` tinyint NOT NULL DEFAULT (0),
  `order` tinyint NOT NULL DEFAULT '0',
  `active` tinyint NOT NULL DEFAULT '1',
  `createdBy` int NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedBy` int NOT NULL DEFAULT '0',
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla gg-games.phone_descriptions: ~4 rows (aproximadamente)
DELETE FROM `phone_descriptions`;
INSERT INTO `phone_descriptions` (`id`, `description`, `default`, `order`, `active`, `createdBy`, `createdAt`, `updatedBy`, `updatedAt`) VALUES
	(1, 'Sin descripcion', 1, 0, 1, 0, NULL, 0, NULL),
	(2, 'Trabajo', 0, 0, 1, 0, NULL, 0, NULL),
	(3, 'Casa', 0, 0, 1, 0, NULL, 0, NULL),
	(4, 'Movil', 0, 0, 1, 0, NULL, 0, NULL);

-- Volcando estructura para tabla gg-games.provinces
DROP TABLE IF EXISTS `provinces`;
CREATE TABLE IF NOT EXISTS `provinces` (
  `id` int NOT NULL AUTO_INCREMENT,
  `countrieId` int NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `default` tinyint NOT NULL DEFAULT (0),
  `order` tinyint NOT NULL DEFAULT '0',
  `active` tinyint NOT NULL DEFAULT '1',
  `createdBy` int NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedBy` int NOT NULL DEFAULT '0',
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_provincies_countries` (`countrieId`),
  CONSTRAINT `fk_provincies_countries` FOREIGN KEY (`countrieId`) REFERENCES `countries` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla gg-games.provinces: ~24 rows (aproximadamente)
DELETE FROM `provinces`;
INSERT INTO `provinces` (`id`, `countrieId`, `name`, `default`, `order`, `active`, `createdBy`, `createdAt`, `updatedBy`, `updatedAt`) VALUES
	(1, 1, 'Ciudad Autónoma de Buenos Aires', 1, 0, 1, 0, NULL, 0, NULL),
	(2, 1, 'Buenos Aires', 0, 0, 1, 0, NULL, 0, NULL),
	(3, 1, 'Catamarca', 0, 0, 1, 0, NULL, 0, NULL),
	(4, 1, 'Córdoba', 0, 0, 1, 0, NULL, 0, NULL),
	(5, 1, 'Corrientes', 0, 0, 1, 0, NULL, 0, NULL),
	(6, 1, 'Entre Ríos', 0, 0, 1, 0, NULL, 0, NULL),
	(7, 1, 'Jujuy', 0, 0, 1, 0, NULL, 0, NULL),
	(8, 1, 'Mendoza', 0, 0, 1, 0, NULL, 0, NULL),
	(9, 1, 'La Rioja', 0, 0, 1, 0, NULL, 0, NULL),
	(10, 1, 'Salta', 0, 0, 1, 0, NULL, 0, NULL),
	(11, 1, 'San Juan', 0, 0, 1, 0, NULL, 0, NULL),
	(12, 1, 'San Luis', 0, 0, 1, 0, NULL, 0, NULL),
	(13, 1, 'Santa Fe', 0, 0, 1, 0, NULL, 0, NULL),
	(14, 1, 'Santiago del Estero', 0, 0, 1, 0, NULL, 0, NULL),
	(15, 1, 'Tucumán', 0, 0, 1, 0, NULL, 0, NULL),
	(16, 1, 'Chaco', 0, 0, 1, 0, NULL, 0, NULL),
	(17, 1, 'Chubut', 0, 0, 1, 0, NULL, 0, NULL),
	(18, 1, 'Formosa', 0, 0, 1, 0, NULL, 0, NULL),
	(19, 1, 'Misiones', 0, 0, 1, 0, NULL, 0, NULL),
	(20, 1, 'Neuquén', 0, 0, 1, 0, NULL, 0, NULL),
	(21, 1, 'La Pampa', 0, 0, 1, 0, NULL, 0, NULL),
	(22, 1, 'Río Negro', 0, 0, 1, 0, NULL, 0, NULL),
	(23, 1, 'Santa Cruz', 0, 0, 1, 0, NULL, 0, NULL),
	(24, 1, 'Tierra del Fuego', 0, 0, 1, 0, NULL, 0, NULL);

-- Volcando estructura para tabla gg-games.roles
DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `default` tinyint NOT NULL DEFAULT '0',
  `order` tinyint NOT NULL DEFAULT '0',
  `active` tinyint NOT NULL DEFAULT '1',
  `createdBy` int NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedBy` int NOT NULL DEFAULT '0',
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla gg-games.roles: ~2 rows (aproximadamente)
DELETE FROM `roles`;
INSERT INTO `roles` (`id`, `description`, `default`, `order`, `active`, `createdBy`, `createdAt`, `updatedBy`, `updatedAt`) VALUES
	(1, 'Administrador', 0, 0, 1, 0, '2023-09-28 00:00:00', 0, '2023-09-28 00:00:00'),
	(2, 'Jugador', 0, 0, 1, 0, NULL, 0, NULL);

-- Volcando estructura para tabla gg-games.scores
DROP TABLE IF EXISTS `scores`;
CREATE TABLE IF NOT EXISTS `scores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `gameId` int NOT NULL,
  `points` bigint NOT NULL DEFAULT (0),
  `active` tinyint NOT NULL DEFAULT (1),
  `createdBy` int NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedBy` int NOT NULL DEFAULT '0',
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_gameId` (`gameId`) USING BTREE,
  CONSTRAINT `fk_scores_games` FOREIGN KEY (`gameId`) REFERENCES `countries` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla gg-games.scores: ~0 rows (aproximadamente)
DELETE FROM `scores`;

-- Volcando estructura para tabla gg-games.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pass` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `rolId` int NOT NULL,
  `checked` tinyint NOT NULL DEFAULT '0',
  `active` tinyint NOT NULL DEFAULT (1),
  `createdBy` int NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT (now()),
  `updatedBy` int NOT NULL DEFAULT '0',
  `updatedAt` datetime NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  KEY `fk_rolId` (`rolId`) USING BTREE,
  CONSTRAINT `fk_users_roles` FOREIGN KEY (`rolId`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla gg-games.users: ~2 rows (aproximadamente)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `user`, `pass`, `email`, `rolId`, `checked`, `active`, `createdBy`, `createdAt`, `updatedBy`, `updatedAt`) VALUES
	(1, 'admin', '123456', NULL, 1, 0, 1, 0, '2023-09-28 00:00:00', 0, '2023-09-28 00:00:00'),
	(2, 'jugador', '123456', NULL, 2, 0, 1, 0, '2024-06-26 12:26:12', 0, '2024-06-26 12:26:12');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
