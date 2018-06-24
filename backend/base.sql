# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.19)
# Database: drpie
# Generation Time: 2018-06-24 03:51:42 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table branches
# ------------------------------------------------------------

DROP TABLE IF EXISTS `branches`;

CREATE TABLE `branches` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `branches` WRITE;
/*!40000 ALTER TABLE `branches` DISABLE KEYS */;

INSERT INTO `branches` (`id`, `name`, `status`, `created_at`, `updated_at`)
VALUES
	(1,'POLICENTRO',1,NULL,NULL),
	(2,'MALL DEL SOL',1,NULL,NULL),
	(3,'QUICENTRO NORTE',1,NULL,NULL);

/*!40000 ALTER TABLE `branches` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table employees
# ------------------------------------------------------------

DROP TABLE IF EXISTS `employees`;

CREATE TABLE `employees` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `employees_code_unique` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;

INSERT INTO `employees` (`id`, `name`, `code`, `status`, `created_at`, `updated_at`)
VALUES
	(1,'INDETERMINADO','000',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(2,'ENTRENAMIENTO','001',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(3,'MADELYNE BUENAIRE','017',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(4,'ANGIE ZEVALLOS','018',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(5,'SANDRA GARCIA','021',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(6,'MERYANN RIOS','026',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(7,'JESSY GUTIERREZ','028',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(8,'SANDY VERA','200',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(9,'ANA PORTILLA','202',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(10,'ISAURA SALAZAR','203',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(11,'FATIMA AZOGUE','206',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(12,'SILVIA LOPEZ','207',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(13,'GABRIELA CARRION','208',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(14,'PAOLA BASURTO','211',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(15,'PATRICIA GUAITOZO','219',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(16,'Jaqueline Chimborazo','220',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(17,'GENESIS MORA','227',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(18,'JENNY AYALA','230',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(19,'LUBELIA ANDRADE','231',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(20,'BRIGITTE DIAZ','232',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(21,'CINTHYA  REYES','233',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(22,'JULIA MERO','234',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(23,'TANIA CASTRO','235',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(24,'DIANA SUARES','236',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(25,'VICTOR CAICEDO','240',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(26,'YASMINA ALAVA','242',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(27,'YAJAIRA RIVAS','247',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(28,'DEYCY CORONEL','248',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(29,'IRIANNA SANCHEZ M.','249',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(30,'SHIRLEY TOALOMBO','250',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(31,'Mercy Sabando','252',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(32,'ANDREA FLORES','253',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(33,'CAROLINA SAMANIEGO','254',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(34,'Soraya Chancay','256',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(35,'DAYSI ASUNCION','258',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(36,'LILIAN ALVARADO','259',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(37,'Sindy Solis','261',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(38,'Herly Segovia','262',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(39,'Valeria Muñoz','263',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(40,'MARCIA SARANGO','264',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(41,'MARIA VERA VERA','265',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(42,'Tania Chávez','267',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(43,'Rosa Elena Hipo','268',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(44,'Andrés Cruz','270',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(45,'MARIA JOSE CASILARI','271',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(46,'GABRIELA SIGCHA','273',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(47,'JANETH ZAMBRANO','300',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(48,'MA. ISABEL AYALA','301',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(49,'Sandra Rivera','302',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(50,'Noemi Manrique','303',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(51,'Ma. Isabel Balseca','304',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(52,'Juletzy Vera','305',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(53,'EVELIN TUMBACO','306',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(54,'DENNIS CARRERA','307',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(55,'EMILY VARGAS','308',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(56,'GREGORIO ALVIA','309',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(57,'KEYLA FLORES','310',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(58,'ERICA SIMBAÑA','311',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(59,'ALEXANDRA BLANCA','312',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(60,'NOEMI MORAN','313',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(61,'KATHIA CAICEDO.','314',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(62,'MARIA EUGENIA GARCIA.','315',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(63,'HECTOR LEIVA','316',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(64,'KARINA RAMIREZ','317',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(65,'HELEN RODRIGUEZ','318',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(66,'PILAR CHIMBORAZO','319',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(67,'DAYSI LEON','320',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(68,'EVIN INTRIAGO','321',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(69,'CONSUELO CHUAPANTA','322',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(70,'ALLISON ARCE','323',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(71,'MA.FERNANDA IMBACUAN','324',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(72,'MA.GABRIELA CHAVESTA','325',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(73,'MARIA CEVALLOS','326',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(74,'GINGER FLORES','327',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(75,'VANESA PINCAY','328',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(76,'TATIANA COBEÑA','329',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(77,'DOLORES CRUZ','330',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(78,'VALERIA PINEDA','331',1,'2018-06-23 22:44:03','2018-06-23 22:44:03'),
	(79,'JOANNA BUSTAMANTE','332',1,'2018-06-23 22:44:03','2018-06-23 22:44:03');

/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table failed_jobs
# ------------------------------------------------------------

DROP TABLE IF EXISTS `failed_jobs`;

CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table jobs
# ------------------------------------------------------------

DROP TABLE IF EXISTS `jobs`;

CREATE TABLE `jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint(3) unsigned NOT NULL,
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table migrations
# ------------------------------------------------------------

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;

INSERT INTO `migrations` (`id`, `migration`, `batch`)
VALUES
	(1,'2014_10_12_000000_create_users_table',1),
	(2,'2014_10_12_100000_create_password_resets_table',1),
	(3,'2018_02_19_172829_create_branches_table',1),
	(4,'2018_02_19_173444_create_employees_table',1),
	(5,'2018_02_19_173627_create_questions_table',1),
	(6,'2018_02_19_174043_create_options_table',1),
	(7,'2018_02_19_174149_create_options_fk',1),
	(8,'2018_02_19_174517_create_visitors_table',1),
	(9,'2018_02_19_202949_create_visitors_fk',1),
	(10,'2018_02_19_203219_create_responses_table',1),
	(11,'2018_02_19_203427_create_responses_fk',1),
	(12,'2018_04_06_205508_create_jobs_table',2),
	(13,'2018_04_06_214641_create_failed_jobs_table',3),
	(14,'2018_05_25_133058_alter_users_table',4);

/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table options
# ------------------------------------------------------------

DROP TABLE IF EXISTS `options`;

CREATE TABLE `options` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `question_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `options_question_id_foreign` (`question_id`),
  CONSTRAINT `options_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table password_resets
# ------------------------------------------------------------

DROP TABLE IF EXISTS `password_resets`;

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table questions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `questions`;

CREATE TABLE `questions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `question` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table responses
# ------------------------------------------------------------

DROP TABLE IF EXISTS `responses`;

CREATE TABLE `responses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `question` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `response` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `additional1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `additional2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `additional3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `visitor_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `responses_visitor_id_foreign` (`visitor_id`),
  CONSTRAINT `responses_visitor_id_foreign` FOREIGN KEY (`visitor_id`) REFERENCES `visitors` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `api_token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_api_token_unique` (`api_token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `name`, `email`, `password`, `api_token`, `remember_token`, `created_at`, `updated_at`, `role`)
VALUES
	(1,'Developer','jisandoya@gmail.com','$2y$10$MGjK3v6ecbiYyaMKZutQ/uYEs8lGEtpm7zxXuPf3S8jx5n7f8xT8G',NULL,'uPjUAnnCmHN5RLZxJ342ZQ14AqVxsUpYbYG7MFPThZLicGhITjkExq8MCzSY',NULL,NULL,1);

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table visitors
# ------------------------------------------------------------

DROP TABLE IF EXISTS `visitors`;

CREATE TABLE `visitors` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `legal_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` int(11) DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `footprint` int(11) DEFAULT NULL,
  `visits` int(11) NOT NULL DEFAULT '0',
  `status` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `branch_id` int(10) unsigned NOT NULL,
  `employee_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `visitors_legal_id_unique` (`legal_id`),
  KEY `visitors_branch_id_foreign` (`branch_id`),
  KEY `visitors_employee_id_foreign` (`employee_id`),
  CONSTRAINT `visitors_branch_id_foreign` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`),
  CONSTRAINT `visitors_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
