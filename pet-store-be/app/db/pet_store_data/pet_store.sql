CREATE DATABASE  IF NOT EXISTS `pet_store` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `pet_store`;
-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: localhost    Database: pet_store
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
-- Table structure for table `bill`
--

DROP TABLE IF EXISTS `bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bill` (
  `bill_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `customer_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `employee_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `bill_created_date` date DEFAULT NULL,
  `bill_delivery_date` date DEFAULT NULL,
  `bill_status` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `bill_total` int DEFAULT NULL,
  `pay_method` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`bill_id`),
  KEY `fk_b_c_ci_idx` (`customer_id`),
  KEY `fk_b_e_ei_idx` (`employee_id`),
  CONSTRAINT `fk_b_c_ci` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_b_e_ei` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill`
--

LOCK TABLES `bill` WRITE;
/*!40000 ALTER TABLE `bill` DISABLE KEYS */;
INSERT INTO `bill` VALUES ('27NrGeJ7ZdrPFFOUkdo','270zIfx9EXn7OWk2lGF','admin_id','2022-04-05','2022-04-08','Completed',250000,'VNPay'),('27O4dh4VrSycQyMnVMf','270zIfx9EXn7OWk2lGF','admin_id',NULL,NULL,'New',0,NULL),('27O4hJo6IcdPxDoMd8T','271Ct3h9TvB7jxntPM5','admin_id',NULL,NULL,'New',0,NULL);
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
  `bill_detail_id` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`bill_detail_id`),
  KEY `fk_bd_b_bi_idx` (`bill_id`),
  KEY `fk_bd_p_pi_idx1` (`promotional_id`),
  CONSTRAINT `fk_bd_b_bi` FOREIGN KEY (`bill_id`) REFERENCES `bill` (`bill_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill_detail`
--

LOCK TABLES `bill_detail` WRITE;
/*!40000 ALTER TABLE `bill_detail` DISABLE KEYS */;
INSERT INTO `bill_detail` VALUES ('27NrGeJ7ZdrPFFOUkdo','27KuiPNJmvq1RmbydF0','','',100,15000,'27NrRAP26hGS1lrp5hl');
/*!40000 ALTER TABLE `bill_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand` (
  `brand_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `brand_name` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`brand_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES ('brand_id_A','BrandA'),('brand_id_B','BrandB');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `comment_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `comment_detail` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `comment_rep_target` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `comment_main` tinyint(1) NOT NULL,
  `product_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `commentor_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `fk_c_p_pi_idx` (`product_id`),
  CONSTRAINT `fk_c_p_pi` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE
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
  `customer_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `customer_mail` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `customer_username` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `customer_pwd` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `address_detail` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `customer_phone` varchar(11) NOT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES ('270zIfx9EXn7OWk2lGF','Khach Hang 1','khachhang1@gmail.com','khachhang1','khachhang1','Tan Hiep','0914784473'),('271Ct3h9TvB7jxntPM5','Khách Hàng 2','khachhang2@gmail.com','khachhang2','khachhang2','Tân Hiệp','0913763102'),('271CveoMjzi64DQYucy','Khách Hàng 3','khachhang3@gmail.com','khachhang3','khachhang3','Ô Môn, Cần Thơ','0913763103'),('271CxKOfWLAeNC2L40Z','Khách Hàng 4','khachhang4@gmail.com','khachhang4','khachhang4','Ninh Kiều, Cần Thơ','0913763104');
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
  `is_admin` tinyint NOT NULL,
  PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES ('271CTAFbYmULdsqcba6','Nhân Viên 1','nhanvien1@gmail.com','0914764014',22,'nhanvien1','nhanvien1',0),('271CUAABVNBtutT4ZoN','Nhân Viên 2','nhanvien2@gmail.com','0914764012',22,'nhanvien2','nhanvien2',0),('271CVJ1D6Q7Tu4HbmRB','Nhân Viên 3','nhanvien3@gmail.com','0914764013',25,'nhanvien3','nhanvien3',0),('271CWv9Kq2eGbzMnYTv','Nhân Viên 4','nhanvien4@gmail.com','0914764011',24,'nhanvien4','nhanvien4',0),('271CfS2aqPGD5SnELOL','Nhân Viên 6','nhanvien6@gmail.com','0914764016',23,'nhanvien6','nhanvien6',0),('admin_id','Admin','admin@gmail.com','0914764104',22,'admin','admin',1);
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
  `product_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `image_source` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `image_display` tinyint NOT NULL,
  PRIMARY KEY (`image_id`),
  UNIQUE KEY `image_source_UNIQUE` (`image_source`),
  KEY `fk_i_p_pi_idx` (`product_id`),
  CONSTRAINT `fk_i_p_pi` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES ('27Kuo0jsq8FyA918B96','27Kuo1lzWvzU5dbV1ys','http://127.0.0.1:8000/images/get-image?image_path=app%2Fmedia%2Fproduct%2F27Kuo0jsq8FyA918B9626ayrjhlVG0X9Nq9MFTHff7b5b5aa7ea419eae3256c5519480f3U.jpg_220x220.jpg',1),('27KurA4kn6BWnH9L4gf','27KurBZhsGI8kI7Hg44','http://127.0.0.1:8000/images/get-image?image_path=app%2Fmedia%2Fproduct%2F27KurA4kn6BWnH9L4gf26ayxdJYWunR1LuLzqXHe5bdf0c5cd0d4d25ab114adc8f262810G.jpg_220x220.jpg',1),('27KuusB5LxxBN09NOiG','27KuunWS74UTwV7QFRE','http://127.0.0.1:8000/images/get-image?image_path=app%2Fmedia%2Fproduct%2F27KuusB5LxxBN09NOiG26az1RZEAFi2ob2ETAnHd5d29b4f2d6d4913b21511b981a2d3b0e.jpg_220x220.jpg',1),('27KuxXLlEuDYTdlZecW','27Kuxcd6TfLZVGGwpkr','http://127.0.0.1:8000/images/get-image?image_path=app%2Fmedia%2Fproduct%2F27KuxXLlEuDYTdlZecW26azGuHUB2MVFbXrDK1Ha771aa337f7b4ba2a5f1490fc9767c6eU.jpg_220x220.jpg',1),('27Kv0KEXvCMh5BXej09','27Kv0MwiQg17ZBnynFa','http://127.0.0.1:8000/images/get-image?image_path=app%2Fmedia%2Fproduct%2F27Kv0KEXvCMh5BXej0926azLGuHDCSS5feFV0IH36a89edbe6b845d3a107e289de7b136ee.jpg_220x220.jpg',1),('27Kv2j5g2PiqR4SiFCA','27Kv2gq3bxXt8sP8I4g','http://127.0.0.1:8000/images/get-image?image_path=app%2Fmedia%2Fproduct%2F27Kv2j5g2PiqR4SiFCA26azOJwswwip4yn8uVA137279.jpg',1),('27QmIVlguJ7fYfF4XNQ','27KuiPNJmvq1RmbydF0','http://127.0.0.1:8000/images/get-image?image_path=app%2Fmedia%2Fproduct%2F27QmIVlguJ7fYfF4XNQScreenshot_20220406-163737_S sc khe in t.jpg',1),('27QmIY4k3LhCv9akalU','27KuiPNJmvq1RmbydF0','http://127.0.0.1:8000/images/get-image?image_path=app%2Fmedia%2Fproduct%2F27QmIY4k3LhCv9akalUOverlay.png',0);
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
  `pet_type_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`pet_type_id`),
  UNIQUE KEY `pet_type_name_UNIQUE` (`pet_type_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pet_type`
--

LOCK TABLES `pet_type` WRITE;
/*!40000 ALTER TABLE `pet_type` DISABLE KEYS */;
INSERT INTO `pet_type` VALUES ('25e4ZNqws4WtdsLL16E','Bird'),('25e4Z1jf2Gb09xbKLMU','Cat'),('25e4Yd7QFbidTDwaQSc','Dog');
/*!40000 ALTER TABLE `pet_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pro_pro`
--

DROP TABLE IF EXISTS `pro_pro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pro_pro` (
  `promotional_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `product_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `propro_id` varchar(20) NOT NULL,
  PRIMARY KEY (`propro_id`),
  KEY `fk_pro_pro_1_idx` (`product_id`),
  KEY `fk_pro_pro_2_idx` (`promotional_id`),
  CONSTRAINT `fk_pro_pro_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_pro_pro_2` FOREIGN KEY (`promotional_id`) REFERENCES `promotional` (`promotional_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pro_pro`
--

LOCK TABLES `pro_pro` WRITE;
/*!40000 ALTER TABLE `pro_pro` DISABLE KEYS */;
INSERT INTO `pro_pro` VALUES ('27QbSVsdRZ1jWWLN2LX','27KurBZhsGI8kI7Hg44','27QbSUNdeBviaTC6pE9'),('27QbSVsdRZ1jWWLN2LX','27Kuo1lzWvzU5dbV1ys','27QbSW7kE4XFzC8m8iN');
/*!40000 ALTER TABLE `pro_pro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `product_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `product_quantity` int NOT NULL,
  `product_sold` int NOT NULL,
  `product_type_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `product_description` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `product_cost` int DEFAULT NULL,
  `brand_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `product_original_cost` int NOT NULL,
  `product_date_in` date NOT NULL,
  `product_date_out` date DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `product_name_UNIQUE` (`product_name`),
  KEY `fk_p_pt_pti_idx` (`product_type_id`),
  KEY `fk_p_b_bi_idx` (`brand_id`),
  CONSTRAINT `fk_p_b_bi` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`brand_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('27KuiPNJmvq1RmbydF0','Ba lô cho chó',150,0,'25e4orCMpwimZ7PosXL','Đây là ba lô cho chó',25000,'brand_id_A',20000,'2022-04-06','2022-04-10'),('27Kuo1lzWvzU5dbV1ys','Vòng cổ cho chó',22,0,'25e4orCMpwimZ7PosXL','Vòng cổ phát sáng siêu đẹp cho thú cưng của bạn',70000,'brand_id_A',50000,'2022-04-04',NULL),('27KurBZhsGI8kI7Hg44','Áo có dây cho chó',22,0,'25e4orCMpwimZ7PosXL','Đây là áo có dây cho chó của bạn',150000,'brand_id_A',125000,'2022-04-04',NULL),('27KuunWS74UTwV7QFRE','Quả cầu phát sáng cho thú cưng của bạn',22,0,'25e4orCMpwimZ7PosXL','Giúp thú cưng của bạn có thể thỏa mãn đam mê chơi đá banh',75000,'brand_id_A',70000,'2022-04-04',NULL),('27Kuxcd6TfLZVGGwpkr','Kềm cắt móng cho mèo',14,0,'25e4pOk9ANpVrPmPHxs','Giúp mèo của bạn dễ vuốt hơn',75000,'brand_id_A',70000,'2022-04-04',NULL),('27Kv0MwiQg17ZBnynFa','Bát nước di động cho chó',14,0,'25e4orCMpwimZ7PosXL','Giúp chó của bạn có thể tự do uống nước ở mọi nơi',75000,'brand_id_A',70000,'2022-04-04',NULL),('27Kv2gq3bxXt8sP8I4g','Dây đeo cho mèo',14,0,'25e4orCMpwimZ7PosXL','Giúp mèo của bạn không bị lạc',12000,'brand_id_A',11000,'2022-04-04',NULL);
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
  CONSTRAINT `fk_pp_p_pi` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  CONSTRAINT `fk_pp_pt_pti` FOREIGN KEY (`pet_type_id`) REFERENCES `pet_type` (`pet_type_id`)
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
  `product_type` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `pet_type_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`product_type_id`),
  KEY `fk_pt_pt_pti_idx` (`pet_type_id`),
  CONSTRAINT `fk_pt_pt_pti` FOREIGN KEY (`pet_type_id`) REFERENCES `pet_type` (`pet_type_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_type`
--

LOCK TABLES `product_type` WRITE;
/*!40000 ALTER TABLE `product_type` DISABLE KEYS */;
INSERT INTO `product_type` VALUES ('25e4orCMpwimZ7PosXL','Accessories','25e4Yd7QFbidTDwaQSc'),('25e4pOk9ANpVrPmPHxs','Accessories','25e4Z1jf2Gb09xbKLMU'),('25e4pi93eFipon10x68','Accessories','25e4ZNqws4WtdsLL16E'),('25e4pz4iMotJnOv7Mp6','Food','25e4ZNqws4WtdsLL16E'),('25e4qI6XQoe2lCQEcM1','Food','25e4Z1jf2Gb09xbKLMU'),('25e4qYhLwy26VkCl78U','Food','25e4Yd7QFbidTDwaQSc'),('25e4rP5ds5RdoOkP0d4','Hygiene','25e4Yd7QFbidTDwaQSc'),('25e4rbrfym7t7QQgf6S','Hygiene','25e4Z1jf2Gb09xbKLMU');
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
  `promotional_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `promotional_description` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `promotional_sale` int NOT NULL,
  `promotional_start_date` date NOT NULL,
  `promotional_end_date` date NOT NULL,
  PRIMARY KEY (`promotional_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotional`
--

LOCK TABLES `promotional` WRITE;
/*!40000 ALTER TABLE `promotional` DISABLE KEYS */;
INSERT INTO `promotional` VALUES ('27QbSVsdRZ1jWWLN2LX','Sieu sale','This is a test promotional',20,'2022-04-06','2022-04-10');
/*!40000 ALTER TABLE `promotional` ENABLE KEYS */;
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
  CONSTRAINT `fk_r_c_ci` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`),
  CONSTRAINT `fk_r_p_pi` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`)
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
  UNIQUE KEY `service_name_UNIQUE` (`service_name`),
  KEY `fk_s_st_idx` (`service_type_id`),
  CONSTRAINT `fk_s_st` FOREIGN KEY (`service_type_id`) REFERENCES `service_type` (`service_type_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES ('27E4e35K9VOevaRLp6z','279tSgO1CQAxlyqW4VQ','Bathing<2kg',80000,'<2kg'),('27E4nz8gcgUHoJHoIMz','279tUL7hVMEmCnSzpCb','Grooming<2kg',150000,'<2kg'),('27E4udIMlk9U2JbDBpB','279tVpoE588gJ0LTI8w','Walking',50000,'50000 per 30 minutes'),('27E5NR1D77g9lFIfRq0','279tSgO1CQAxlyqW4VQ','Bathing<4kg',100000,'<4kg'),('27E5TTZw0vzFW0hWpmd','279tUgOyWlfPx4CM4qN','Boarding<2kg',50000,'<2kg');
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
  CONSTRAINT `fk_sp_pt_pt` FOREIGN KEY (`pet_type_id`) REFERENCES `pet_type` (`pet_type_id`),
  CONSTRAINT `fk_sp_pt_s` FOREIGN KEY (`service_id`) REFERENCES `service` (`service_id`)
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
  PRIMARY KEY (`service_type_id`),
  UNIQUE KEY `service_type_name_UNIQUE` (`service_type_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_type`
--

LOCK TABLES `service_type` WRITE;
/*!40000 ALTER TABLE `service_type` DISABLE KEYS */;
INSERT INTO `service_type` VALUES ('279tSgO1CQAxlyqW4VQ','Bathing'),('279tUgOyWlfPx4CM4qN','Boarding'),('279tXUnX0mhpPeR4NKA','Combo1'),('279tXexS8fm4lQ15PRH','Combo2'),('279tXnSYQqgD8k7K8wG','Combo3'),('279tUL7hVMEmCnSzpCb','Grooming'),('279tVpoE588gJ0LTI8w','Walking');
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

-- Dump completed on 2022-04-06 23:11:17
