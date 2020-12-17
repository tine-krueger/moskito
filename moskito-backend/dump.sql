-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: moskito
-- ------------------------------------------------------
-- Server version	5.7.31-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `campsite`
--

DROP TABLE IF EXISTS `campsite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `campsite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postal_code` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `place` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telephone` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitude` decimal(11,8) NOT NULL,
  `latitude` decimal(10,8) NOT NULL,
  `web` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campsite`
--

LOCK TABLES `campsite` WRITE;
/*!40000 ALTER TABLE `campsite` DISABLE KEYS */;
INSERT INTO `campsite` VALUES (1,'Camp Langholz','Fischerstraße 9','24369','Waabs','+494352-911 48 4','info@camp-langholz.de',9.98237000,54.51331000,' https://www.camp-langholz.de/'),(2,'Strandcamping Fehrmarnbelt','Altenteil 21','23769','Fehmarn','','',11.07666000,54.53082000,'http://www.strandcamping-fehmarnbelt.de'),(3,'meerGrün lodge','Martendorf 4','25881','Tating','04862-201 98 51 75','info@meergruen-lodge.de',8.69600000,54.32427000,'http://www.meergruen-lodge.de'),(4,'Naturcamping Buchholz','Am Campingplatz 1','23911','Buchholz',' 04541-425 5','office@naturcampingbuchholz.de',10.74003000,53.73867000,'http:// www.naturcampingbuchholz.de'),(5,'Schaalsee-Camp','Sterleyer Heide 2','23883','Seedorf','04501-412','info@kanu-center.de',10.85838000,53.64011000,'https://www.kanu-center.de/schaalsee-camp'),(6,'ElbeCamp','Falkensteiner Ufer 101','22587','Hamburg','040-812 94 9','info@elbecamp.de',9.76686000,53.56396000,'http://www.elbecamp.de'),(7,'Naturcamping ZWEI SEEN','Waldchaussee 2','17209','Zislow am Plauer See','039924-290 18','info@zweiseen.de',12.31076000,53.44533000,' https://www.zweiseen.de'),(8,'Campingplatz „Zum Hexenwäldchen“','Blankenförde 1a','17252','Mirow / Ortsteil Blankenförde','039829-202 15','kontakt@hexenwaeldchen.de',12.92250000,53.34737000,'www.hexenwaeldchen.de'),(9,'Camping Land an der Elbe','Stover Strand 7','21423','Drage',' 04176-327','info@camping-land-online.de',10.30103000,53.42827000,'https://www.camping-land-online.de/'),(10,'Camping Stover Strand International','Stover Strand 10','21423','Drage',' 04177-430','info@camping-stover-strand.de',10.29544000,53.42430000,'http:// www.camping-stover-strand.de'),(11,'Campingplatz Zum Oertzewinkel','Kreutzen 22','29633','Munster',' 05055-554 9','info@oertzewinkel.de',10.06326000,53.09221000,' http://www.oertzewinkel.de/'),(12,'Campingpark Buntspecht','Weg zum Zeltplatz 1','14715','Ferchesar','033874-900 72','campingpark-buntspecht@web.de',12.42635000,52.71856000,'http://www.campingpark-buntspecht.de'),(13,'Naturcampingplatz Blanschen','Am Blanschen 1','16909','Wittstock','0173-157 58 84','mail@campingplatz-blanschen.de',12.62006000,53.18597000,'https://campingplatz-blanschen.de/');
/*!40000 ALTER TABLE `campsite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `campsite_feature`
--

DROP TABLE IF EXISTS `campsite_feature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `campsite_feature` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `campsite_id` int(11) DEFAULT NULL,
  `type` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_19823E1FF63910C0` (`campsite_id`),
  CONSTRAINT `FK_19823E1FF63910C0` FOREIGN KEY (`campsite_id`) REFERENCES `campsite` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=209 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campsite_feature`
--

LOCK TABLES `campsite_feature` WRITE;
/*!40000 ALTER TABLE `campsite_feature` DISABLE KEYS */;
INSERT INTO `campsite_feature` VALUES (1,1,'wlan',1),(2,1,'music',1),(3,1,'animation',1),(4,1,'fire',1),(5,1,'path',1),(6,1,'bulli',1),(7,1,'tents',1),(8,1,'subdevision',0),(9,1,'permanent',1),(10,1,'size',0),(11,1,'bio',0),(12,1,'snack',1),(13,1,'animals',1),(14,1,'seaside',1),(15,1,'bathing',1),(16,1,'forest',0),(17,2,'wlan',1),(18,2,'music',1),(19,2,'animation',1),(20,2,'fire',0),(21,2,'path',1),(22,2,'bulli',1),(23,2,'tents',1),(24,2,'subdevision',0),(25,2,'permanent',1),(26,2,'size',0),(27,2,'bio',0),(28,2,'snack',1),(29,2,'animals',1),(30,2,'seaside',1),(31,2,'bathing',1),(32,2,'forest',0),(33,3,'wlan',0),(34,3,'music',1),(35,3,'animation',0),(36,3,'fire',1),(37,3,'path',1),(38,3,'bulli',1),(39,3,'tents',1),(40,3,'subdevision',0),(41,3,'permanent',1),(42,3,'size',1),(43,3,'bio',0),(44,3,'snack',1),(45,3,'animals',1),(46,3,'seaside',0),(47,3,'bathing',1),(48,3,'forest',0),(49,4,'wlan',0),(50,4,'music',1),(51,4,'animation',1),(52,4,'fire',1),(53,4,'path',0),(54,4,'bulli',1),(55,4,'tents',1),(56,4,'subdevision',0),(57,4,'permanent',0),(58,4,'size',0),(59,4,'bio',0),(60,4,'snack',1),(61,4,'animals',1),(62,4,'seaside',1),(63,4,'bathing',1),(64,4,'forest',1),(65,5,'wlan',1),(66,5,'music',1),(67,5,'animation',1),(68,5,'fire',1),(69,5,'path',1),(70,5,'bulli',1),(71,5,'tents',1),(72,5,'subdevision',0),(73,5,'permanent',0),(74,5,'size',0),(75,5,'bio',0),(76,5,'snack',0),(77,5,'animals',1),(78,5,'seaside',1),(79,5,'bathing',1),(80,5,'forest',1),(81,6,'wlan',0),(82,6,'music',1),(83,6,'animation',1),(84,6,'fire',1),(85,6,'path',1),(86,6,'bulli',1),(87,6,'tents',1),(88,6,'subdevision',0),(89,6,'permanent',1),(90,6,'size',0),(91,6,'bio',0),(92,6,'snack',1),(93,6,'animals',1),(94,6,'seaside',1),(95,6,'bathing',0),(96,6,'forest',0),(97,7,'wlan',1),(98,7,'music',1),(99,7,'animation',1),(100,7,'fire',1),(101,7,'path',1),(102,7,'bulli',1),(103,7,'tents',1),(104,7,'subdevision',1),(105,7,'permanent',1),(106,7,'size',0),(107,7,'bio',1),(108,7,'snack',1),(109,7,'animals',1),(110,7,'seaside',1),(111,7,'bathing',1),(112,7,'forest',1),(113,8,'wlan',1),(114,8,'music',1),(115,8,'animation',1),(116,8,'fire',1),(117,8,'path',1),(118,8,'bulli',1),(119,8,'tents',1),(120,8,'subdevision',1),(121,8,'permanent',1),(122,8,'size',0),(123,8,'bio',1),(124,8,'snack',1),(125,8,'animals',0),(126,8,'seaside',1),(127,8,'bathing',1),(128,8,'forest',1),(129,9,'wlan',0),(130,9,'music',1),(131,9,'animation',1),(132,9,'fire',1),(133,9,'path',0),(134,9,'bulli',1),(135,9,'tents',0),(136,9,'subdevision',0),(137,9,'permanent',0),(138,9,'size',0),(139,9,'bio',0),(140,9,'snack',1),(141,9,'animals',1),(142,9,'seaside',1),(143,9,'bathing',1),(144,9,'forest',0),(145,10,'wlan',0),(146,10,'music',0),(147,10,'animation',0),(148,10,'fire',1),(149,10,'path',0),(150,10,'bulli',1),(151,10,'tents',0),(152,10,'subdevision',0),(153,10,'permanent',0),(154,10,'size',0),(155,10,'bio',0),(156,10,'snack',1),(157,10,'animals',1),(158,10,'seaside',1),(159,10,'bathing',1),(160,10,'forest',0),(161,11,'wlan',1),(162,11,'music',0),(163,11,'animation',1),(164,11,'fire',1),(165,11,'path',0),(166,11,'bulli',1),(167,11,'tents',0),(168,11,'subdevision',0),(169,11,'permanent',0),(170,11,'size',0),(171,11,'bio',0),(172,11,'snack',1),(173,11,'animals',1),(174,11,'seaside',0),(175,11,'bathing',1),(176,11,'forest',0),(177,12,'wlan',0),(178,12,'music',0),(179,12,'animation',0),(180,12,'fire',1),(181,12,'path',0),(182,12,'bulli',1),(183,12,'tents',1),(184,12,'subdevision',0),(185,12,'permanent',0),(186,12,'size',0),(187,12,'bio',1),(188,12,'snack',1),(189,12,'animals',1),(190,12,'seaside',1),(191,12,'bathing',1),(192,12,'forest',1),(193,13,'wlan',1),(194,13,'music',1),(195,13,'animation',1),(196,13,'fire',1),(197,13,'path',1),(198,13,'bulli',1),(199,13,'tents',1),(200,13,'subdevision',1),(201,13,'permanent',0),(202,13,'size',0),(203,13,'bio',0),(204,13,'snack',1),(205,13,'animals',1),(206,13,'seaside',1),(207,13,'bathing',1),(208,13,'forest',1);
/*!40000 ALTER TABLE `campsite_feature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctrine_migration_versions`
--

DROP TABLE IF EXISTS `doctrine_migration_versions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctrine_migration_versions`
--

LOCK TABLES `doctrine_migration_versions` WRITE;
/*!40000 ALTER TABLE `doctrine_migration_versions` DISABLE KEYS */;
INSERT INTO `doctrine_migration_versions` VALUES ('DoctrineMigrations\\Version20201123132057','2020-11-23 13:21:13',104),('DoctrineMigrations\\Version20201123144203','2020-11-23 14:42:19',64),('DoctrineMigrations\\Version20201123155726','2020-11-23 15:57:36',180),('DoctrineMigrations\\Version20201123162606','2020-11-23 16:26:19',77),('DoctrineMigrations\\Version20201123200704','2020-11-23 20:07:21',46),('DoctrineMigrations\\Version20201124150601','2020-11-24 15:09:07',370),('DoctrineMigrations\\Version20201125082216','2020-11-25 08:23:43',108),('DoctrineMigrations\\Version20201125082837','2020-11-25 08:29:05',128),('DoctrineMigrations\\Version20201125091336','2020-11-25 09:14:55',146),('DoctrineMigrations\\Version20201125092052','2020-11-25 09:21:11',133),('DoctrineMigrations\\Version20201125092329','2020-11-25 09:23:40',107),('DoctrineMigrations\\Version20201125093154','2020-11-25 09:32:20',234),('DoctrineMigrations\\Version20201125103918','2020-11-25 10:39:47',192),('DoctrineMigrations\\Version20201125104910','2020-11-25 10:49:22',369),('DoctrineMigrations\\Version20201125143926','2020-11-25 14:39:46',48),('DoctrineMigrations\\Version20201125144949','2020-11-25 14:50:06',121),('DoctrineMigrations\\Version20201125145152','2020-11-25 14:52:11',122),('DoctrineMigrations\\Version20201125145440','2020-11-25 14:54:51',105),('DoctrineMigrations\\Version20201125145754','2020-11-25 14:58:05',162),('DoctrineMigrations\\Version20201127072233','2020-11-27 07:22:48',410),('DoctrineMigrations\\Version20201127072628','2020-11-27 07:26:50',189),('DoctrineMigrations\\Version20201129081444','2020-11-29 08:14:54',62);
/*!40000 ALTER TABLE `doctrine_migration_versions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(160) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (16,'Tine','Krüger','krueger.christ@gmail.com','$argon2id$v=19$m=65536,t=4,p=1$uUqLEAjPVHXp8whbLhLY1w$GjC5Mjcpm1WbeCSO4bQsO4XS1MgKIen0cmzenvnWBXI'),(17,'Tine','Krüger','krueger.chist@gmail.com','$argon2id$v=19$m=65536,t=4,p=1$V1dDsKehzl19hTEt0Mt2Ww$24YfWZAKEeGmvUHbd69J4aaKgmX6nhncnTATJ5Vl3Fc'),(18,'Tine','Krüger','krueger.chst@gmail.com','$argon2id$v=19$m=65536,t=4,p=1$ml78MkZngYWIkGdfT3czIg$Wb5wV++GJbL61DDKJCVFuGPwBGXmsgatEocwc+1/K2E'),(19,'Tine','Krüger','kueger.chst@gmail.com','$argon2id$v=19$m=65536,t=4,p=1$fwZhaaweBsKHDbsvHha0Xw$RRN1uGF834983vBSdO4YQob/egiY/u8zMLsnWBrZ7f8'),(20,'Markus','Knöfler','mk@conclusys.de','HereIAm21!'),(21,'Markus','Knöfler','mk@conclusys.com','$argon2id$v=19$m=65536,t=4,p=1$LJneNoShKe+zxDlrh00xUw$xg/lv0YOFOdsuin9yBqTWVNu5HqIMgMeJehthabnvq4'),(22,'Markus','Knöfler','mk@conclusys.io','$argon2id$v=19$m=65536,t=4,p=1$lhPk+q1Io4+x3qb/aHXrdg$NR6CdGSfxJmd8ytbeySyRTHEGyrfKnfkrLnsE0w6kZA'),(23,'Camping Stover','International','krueger.christ@gmail.co','$argon2id$v=19$m=65536,t=4,p=1$fZ1IPHwfNDLOWKzRs24lvg$w7Amiwg+esiuTfz4oD1gaqUGZEcg0MUfDe7ltTd1XTM'),(24,'Ella','Propella','ella@propella.de','$argon2id$v=19$m=65536,t=4,p=1$FxmstzCYI7JcUHMvVNIRQw$9nKkemnq002HSj9f/IUEarZVunbvMxRDqSzdz7Hxgtc'),(25,'Mine','Mone','mine@mone.de','$argon2id$v=19$m=65536,t=4,p=1$bhPS8RZbL+YjVtK+J3Dfzw$Q5ZePef3yWJO6Noz4ndA482iqK4DBnHzCywYQk2XjZw'),(26,'Christine ','Blue','christine@blue.de','$argon2id$v=19$m=65536,t=4,p=1$x0zUQxnsQ4c0G7lYBgG3hA$z+4dZI1MupbDdZ52AN4VOEFWMyQRsjD1KYN8YvkWdww'),(27,'Christine ','Blue','christine@blue.com','$argon2id$v=19$m=65536,t=4,p=1$miq68i+tbQyRYklP6F7K1A$KoE1wsjoXx/xP6nbAQOwsVr18U2r0oTbU9bmc1Vtn64'),(28,'Christine ','Blue','christine@blue.io','$argon2id$v=19$m=65536,t=4,p=1$OKBohvHQcMXF5pnRj6YmjQ$3OQUygAiRiRe5i4I+5Ga4Pws3omLa0yRNtox+4Ha3Ws'),(29,'Christine ','Blue','christine@blue.test','$argon2id$v=19$m=65536,t=4,p=1$sykOSNop3QpeOQI8rE+NxQ$XryLoJunQ/kaiZXXuB/dHk/OcXu3SWxoNoZaCAa2ggA'),(30,'Christine ','Blue','christine@blue.for','$argon2id$v=19$m=65536,t=4,p=1$5frT13j/pbiaRkIKf7ktuA$Q0oWRMbdocW5yGtiiv7PArJSK0FBqGSXLljq4vno54g'),(31,'Christine ','Blue','christine@blue.aha','$argon2id$v=19$m=65536,t=4,p=1$8KfdtJm+9HEzJDscbadL+A$ng0yP+ckw2AhBK9u+5OxyXFHl6RShBpd2AIojaV8voM'),(32,'Christine ','Blue','christine@blue.oho','$argon2id$v=19$m=65536,t=4,p=1$oTMv3AmFjpY2Y0zocF9oLg$5EtxyvKnvhHjbqS29mbZwj7mh0mCLDbvDzZzybhnoFY'),(33,'Holla','die Waldfee','krueger.christ@gmail.maeh','$argon2id$v=19$m=65536,t=4,p=1$NIvZzMggF1qvGL1maICqfw$pzO+vaDgoH174fiI/jhYNqiFOLnX3RWNX4h8i9phrRg'),(34,'Holla','die Waldfee','krueger.christ@gmail.muh','$argon2id$v=19$m=65536,t=4,p=1$frd8w8PY2o9OwqqLC9Dx0g$bhCVjrETW5z2Wv40Aqcv/AI9Sdq2FPu0nbdFhagWHx0'),(35,'Holla','die Waldfee','krueger.christ@gmail.grrr','$argon2id$v=19$m=65536,t=4,p=1$XX7NN/KXBDIfpccGxdzA1w$h3yEdcetHj4DBiBt4rWTWhK4ggYBukWg7Y/97RF87HM'),(36,'Hanelore','Schmidt','hanelore@gmail.co','$argon2id$v=19$m=65536,t=4,p=1$OkUdnZfY5ypXKh3/xGdggw$bxCoxqIwN+QcE8af/j90PX/SH35NUesDpFe3LUdLt9E'),(37,'Hella','die Waldfee','Hellast@gmail.co','$argon2id$v=19$m=65536,t=4,p=1$Fxcs4tG9GLBBsV/80hPdgw$QQcAbC9v9FeGDwDAaHe/LIWKF56Sh+WLUMaxajMW+eQ'),(38,'Rosamunde','Pilcher','Rosamunde@pichler.de','$argon2id$v=19$m=65536,t=4,p=1$gmuaJXq+oFsC33LBLHpTVA$wlz9tflmM/ObKlQ+eGq4je/BXHSHOjBJhijByLj5KJc'),(39,'Christine','Krüger','ck@spierenstich.de','$argon2id$v=19$m=65536,t=4,p=1$Zrq6YqA2S2XgtcxvV/p99Q$nH11wLbekyRYLuLlEiq3jQEyOQ08sL7+mOUdfkMvxdw'),(40,'Gabi','Neubauer','gabi@neubaer.de','$argon2id$v=19$m=65536,t=4,p=1$7T27JkYmYV2GK8CUOCcrxg$BlxOBnCE53fxQsvvG9+p8FgvAwr8hfpMCwH+8M1q+jc'),(41,'Britta','Mühlenkam','britta@muehlenkamp.de','$argon2id$v=19$m=65536,t=4,p=1$0R9jjVbRDBcXH+90n1myDQ$XzcwxDZDWjf4TmVe3vUbaiKJUXUyM7ad7NAzTBldrMw'),(42,'krueger','karla','karla@krueger.de','$argon2id$v=19$m=65536,t=4,p=1$fjG0XVeJaUEfojZbVSmyBA$geYTBILi9MD2Q3Tu4OHx7R38rubesIP0BikOpLJy7SA'),(43,'Mary','Lu','mary@lu.de','$argon2id$v=19$m=65536,t=4,p=1$8yfUyFc7VJyLVsHHEXogDw$HjwBXyX1xDkzz6iJByVpGbaEwDFxSnsJN+N+emX4XLQ'),(44,'mia','maus','mia@maus.com','$argon2id$v=19$m=65536,t=4,p=1$Ll0kx0x+3VdLanlJFlCtoA$HdVzD7m6WFKUXnCNvFjlcpSDD7g7AL0QvBeIs3Q/i7s'),(45,'Lulu','Ferrari','lulu@ferrari.de','$argon2id$v=19$m=65536,t=4,p=1$SpKIZouvhoCjU2DIVJn6iA$XMIvKiIdPPjNC5Rd5WK8YsfqtrxzlXmy2qMLErY1YwQ'),(46,'Merle','Muh','merle@muh.de','$argon2id$v=19$m=65536,t=4,p=1$jVamlxdyn0SJSNc2YCFG5g$wPRzJQ+sfmi7kY67LXQC8FhRyPZ8nfCoZCmlw8h7RgU');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_campsite`
--

DROP TABLE IF EXISTS `user_campsite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_campsite` (
  `user_id` int(11) NOT NULL,
  `campsite_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`campsite_id`),
  KEY `IDX_F3B5F1D3A76ED395` (`user_id`),
  KEY `IDX_F3B5F1D3F63910C0` (`campsite_id`),
  CONSTRAINT `FK_F3B5F1D3A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_F3B5F1D3F63910C0` FOREIGN KEY (`campsite_id`) REFERENCES `campsite` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_campsite`
--

LOCK TABLES `user_campsite` WRITE;
/*!40000 ALTER TABLE `user_campsite` DISABLE KEYS */;
INSERT INTO `user_campsite` VALUES (39,1),(39,5),(39,6),(39,10),(39,11),(45,6),(45,7),(46,1),(46,2);
/*!40000 ALTER TABLE `user_campsite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_token`
--

DROP TABLE IF EXISTS `user_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valid_until` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_BDF55A63A76ED395` (`user_id`),
  CONSTRAINT `FK_BDF55A63A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_token`
--

LOCK TABLES `user_token` WRITE;
/*!40000 ALTER TABLE `user_token` DISABLE KEYS */;
INSERT INTO `user_token` VALUES (1,16,'5fd0baf0ef0a11.34389633','2020-12-10 11:54:24'),(6,39,'5fd2261e7a2269.27099459','2020-12-11 13:43:58'),(12,39,'5fd244ca9bbd56.42105036','2020-12-11 15:54:50'),(13,39,'5fd246156a9691.36791979','2020-12-11 16:00:21'),(14,39,'5fd2463a4533d9.27217951','2020-12-11 16:00:58'),(16,39,'5fd2588f35c830.78228011','2020-12-11 17:19:11'),(24,45,'5fd4ab08585b49.36536124','2020-12-13 11:35:36'),(25,45,'5fd4ad0388b738.44190022','2020-12-13 11:44:03'),(30,39,'5fd671752d1998.23067105','2020-12-14 19:54:29'),(46,39,'5fd89fc4d102b1.94364296','2020-12-16 11:36:36'),(47,39,'5fd89fc4d58c92.44209442','2020-12-16 11:36:36');
/*!40000 ALTER TABLE `user_token` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-16 13:37:41

