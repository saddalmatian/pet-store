CREATE DATABASE  IF NOT EXISTS `pet_store` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `pet_store`;
-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: pet_store
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `address_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `customer_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `address_detail` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`address_id`),
  KEY `fk_a_c_ci_idx` (`customer_id`),
  CONSTRAINT `fk_a_c_ci` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bill`
--

DROP TABLE IF EXISTS `bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bill` (
  `bill_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `customer_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `employee_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `bill_created_date` date NOT NULL,
  `bill_delievery_date` date NOT NULL,
  `bill_status` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `bill_total` int NOT NULL,
  `pay_method` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`bill_id`),
  KEY `fk_b_c_ci_idx` (`customer_id`),
  KEY `fk_b_e_ei_idx` (`employee_id`),
  CONSTRAINT `fk_b_c_ci` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_b_e_ei` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill`
--

LOCK TABLES `bill` WRITE;
/*!40000 ALTER TABLE `bill` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bill_detail`
--

DROP TABLE IF EXISTS `bill_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bill_detail` (
  `bill_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `product_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `service_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `promotional_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `product_quantity` int DEFAULT NULL,
  `cost` int DEFAULT NULL,
  KEY `fk_bd_b_bi_idx` (`bill_id`),
  KEY `fk_bd_p_pi_idx` (`product_id`),
  KEY `fk_bd_s_si_idx` (`service_id`),
  KEY `fk_bd_p_pi_idx1` (`promotional_id`),
  CONSTRAINT `fk_bd_b_bi` FOREIGN KEY (`bill_id`) REFERENCES `bill` (`bill_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_bd_p_pi` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_bd_s_si` FOREIGN KEY (`service_id`) REFERENCES `service` (`service_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill_detail`
--

LOCK TABLES `bill_detail` WRITE;
/*!40000 ALTER TABLE `bill_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `comment_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `customer_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `employee_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `comment_detail` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `comment_rep_target` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `comment_main` tinyint(1) NOT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `fk_c_c_ci_idx` (`customer_id`),
  KEY `fk_c_e_ei_idx` (`employee_id`),
  CONSTRAINT `fk_c_c_ci` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_c_e_ei` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customer_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `customer_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `customer_mail` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `customer_username` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `customer_pwd` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `employee_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `employee_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `employee_email` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `employee_phone` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `employee_age` int NOT NULL,
  `employee_username` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `employee_pwd` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `image_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `product_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `service_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `image_source` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`image_id`),
  KEY `fk_i_p_pi_idx` (`product_id`),
  KEY `fk_i_s_si_idx` (`service_id`),
  CONSTRAINT `fk_i_p_pi` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_i_s_si` FOREIGN KEY (`service_id`) REFERENCES `service` (`service_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pet_type`
--

DROP TABLE IF EXISTS `pet_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pet_type` (
  `pet_type_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `pet_type_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`pet_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pet_type`
--

LOCK TABLES `pet_type` WRITE;
/*!40000 ALTER TABLE `pet_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `pet_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `pet_type_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `product_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `product_detail` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `product_cost` int NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `fk_p_pt_pti_idx` (`pet_type_id`),
  CONSTRAINT `fk_p_pt_pti` FOREIGN KEY (`pet_type_id`) REFERENCES `product_pet` (`pet_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_pet`
--

DROP TABLE IF EXISTS `product_pet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_pet` (
  `product_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `pet_type_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  KEY `fk_pp_pt_pi_idx` (`pet_type_id`),
  KEY `fk_pp_p_pi_idx` (`product_id`),
  CONSTRAINT `fk_pp_p_pi` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_pp_pt_pti` FOREIGN KEY (`pet_type_id`) REFERENCES `pet_type` (`pet_type_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_pet`
--

LOCK TABLES `product_pet` WRITE;
/*!40000 ALTER TABLE `product_pet` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_pet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_type`
--

DROP TABLE IF EXISTS `product_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_type` (
  `product_type_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `product_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `product_type` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`product_type_id`),
  KEY `fk_pt_p_pi_idx` (`product_id`),
  CONSTRAINT `fk_pt_p_pi` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_type`
--

LOCK TABLES `product_type` WRITE;
/*!40000 ALTER TABLE `product_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotional`
--

DROP TABLE IF EXISTS `promotional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotional` (
  `promotional_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `product_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `service_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `productional_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`promotional_id`),
  KEY `fk_p_p_pi_idx` (`product_id`),
  KEY `fk_p_s_si_idx` (`service_id`),
  CONSTRAINT `fk_p_p_pi` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_p_s_si` FOREIGN KEY (`service_id`) REFERENCES `service` (`service_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotional`
--

LOCK TABLES `promotional` WRITE;
/*!40000 ALTER TABLE `promotional` DISABLE KEYS */;
/*!40000 ALTER TABLE `promotional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotional_detail`
--

DROP TABLE IF EXISTS `promotional_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotional_detail` (
  `promotional_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `promotional_description` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `promotional_sale` int NOT NULL,
  `promotional_start_date` date NOT NULL,
  `promotional_end_date` date NOT NULL,
  KEY `fk_pd_p_idx` (`promotional_id`),
  CONSTRAINT `fk_pd_p` FOREIGN KEY (`promotional_id`) REFERENCES `promotional` (`promotional_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotional_detail`
--

LOCK TABLES `promotional_detail` WRITE;
/*!40000 ALTER TABLE `promotional_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `promotional_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rate`
--

DROP TABLE IF EXISTS `rate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rate` (
  `rate_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `product_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `customer_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `rate_star_number` int DEFAULT NULL,
  PRIMARY KEY (`rate_id`),
  KEY `fk_r_p_pi_idx` (`product_id`),
  KEY `fk_r_c_ci_idx` (`customer_id`),
  CONSTRAINT `fk_r_c_ci` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_r_p_pi` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rate`
--

LOCK TABLES `rate` WRITE;
/*!40000 ALTER TABLE `rate` DISABLE KEYS */;
/*!40000 ALTER TABLE `rate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service` (
  `service_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `service_type_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `service_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `service_cost` int NOT NULL,
  `service_detail` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`service_id`),
  KEY `fk_s_st_idx` (`service_type_id`),
  CONSTRAINT `fk_s_st` FOREIGN KEY (`service_type_id`) REFERENCES `service_type` (`service_type_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_pet`
--

DROP TABLE IF EXISTS `service_pet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_pet` (
  `pet_type_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `service_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  KEY `fk_sp_pt_pt_idx` (`pet_type_id`),
  KEY `fk_sp_pt_s_idx` (`service_id`),
  CONSTRAINT `fk_sp_pt_pt` FOREIGN KEY (`pet_type_id`) REFERENCES `pet_type` (`pet_type_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_sp_pt_s` FOREIGN KEY (`service_id`) REFERENCES `service` (`service_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_pet`
--

LOCK TABLES `service_pet` WRITE;
/*!40000 ALTER TABLE `service_pet` DISABLE KEYS */;
/*!40000 ALTER TABLE `service_pet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_type`
--

DROP TABLE IF EXISTS `service_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_type` (
  `service_type_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `service_type_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`service_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_type`
--

LOCK TABLES `service_type` WRITE;
/*!40000 ALTER TABLE `service_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `service_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-20 15:10:14
