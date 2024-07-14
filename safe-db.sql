-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 14, 2024 at 08:18 AM
-- Server version: 8.0.30
-- PHP Version: 8.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `safe-db`
--
CREATE DATABASE IF NOT EXISTS `safe-db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `safe-db`;

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `deleted_at`) VALUES
(1, 'Laptop', NULL),
(2, 'Desktop PC', NULL),
(3, 'Printer', NULL),
(4, 'Monitor', NULL),
(5, 'Accessories', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` bigint UNSIGNED NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stock` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categories_id` bigint UNSIGNED NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `code`, `name`, `stock`, `categories_id`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'LT005', 'Dell XPS 13', '10', 1, NULL, '2024-01-14 17:00:00', '2024-07-14 08:17:06'),
(2, 'PC005', 'MSI Trident 3', '5', 2, NULL, '2024-02-19 17:00:00', '2024-07-14 08:17:06'),
(3, 'PR005', 'HP DeskJet 2755', '8', 3, NULL, '2024-03-24 17:00:00', '2024-07-14 08:17:06'),
(4, 'MN005', 'BenQ PD2700U', '15', 4, NULL, '2024-04-09 17:00:00', '2024-07-14 08:17:06'),
(5, 'AC005', 'Anker PowerCore 10000', '20', 5, NULL, '2024-05-04 17:00:00', '2024-07-14 08:17:06'),
(6, 'LT006', 'Razer Blade 15', '12', 1, NULL, '2024-06-11 17:00:00', '2024-07-14 08:17:06'),
(7, 'PC006', 'ASUS ROG Strix G10DK', '6', 2, NULL, '2024-06-30 17:00:00', '2024-07-14 08:17:06'),
(8, 'PR006', 'Samsung Xpress M2020W', '5', 3, NULL, '2024-07-06 17:00:00', '2024-07-14 08:17:06'),
(9, 'MN006', 'Dell UltraSharp U2720Q', '10', 4, NULL, '2024-08-10 17:00:00', '2024-07-14 08:17:06'),
(10, 'AC006', 'Kingston A2000 NVMe SSD', '25', 5, NULL, '2024-09-14 17:00:00', '2024-07-14 08:17:06'),
(11, 'LT007', 'Apple MacBook Air M1', '8', 1, NULL, '2024-10-19 17:00:00', '2024-07-14 08:17:06'),
(12, 'PC007', 'Corsair One i160', '3', 2, NULL, '2024-11-24 17:00:00', '2024-07-14 08:17:06'),
(13, 'PR007', 'Brother MFC-J995DW', '7', 3, NULL, '2024-12-04 17:00:00', '2024-07-14 08:17:06'),
(14, 'MN007', 'Asus ProArt PA34VC', '12', 4, NULL, '2024-12-14 17:00:00', '2024-07-14 08:17:06'),
(15, 'AC007', 'WD My Passport 2TB', '18', 5, NULL, '2024-12-19 17:00:00', '2024-07-14 08:17:06'),
(16, 'LT008', 'Acer Swift 3', '6', 1, NULL, '2024-01-04 17:00:00', '2024-07-14 08:17:06'),
(17, 'PC008', 'Intel NUC 10', '9', 2, NULL, '2024-02-11 17:00:00', '2024-07-14 08:17:06'),
(18, 'PR008', 'Canon imageCLASS LBP6030w', '3', 3, NULL, '2024-03-16 17:00:00', '2024-07-14 08:17:06'),
(19, 'MN008', 'Philips 276E8VJSB', '20', 4, NULL, '2024-04-19 17:00:00', '2024-07-14 08:17:06'),
(20, 'AC008', 'Seagate Expansion 1TB', '15', 5, NULL, '2024-05-24 17:00:00', '2024-07-14 08:17:06');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_07_06_143003_create_categories_table', 1),
(5, '2024_07_06_143107_create_items_table', 1),
(6, '2024_07_06_143203_create_transactions_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('hLqnRqLZ6COR9R8Wy2OwrcrO2UtyF16qJJ9Jw9sz', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiQUtEQUtFSVdrMEo4d3lqSTY2VEttYVRwbjF5aUx3Q01kTVcxY2FUYyI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czozMDoiaHR0cDovL3NhZmVzcGFjZS5uaXJtYWxhL2l0ZW1zIjt9czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjQ6Imh0dHA6Ly9zYWZlc3BhY2UubmlybWFsYSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1720945077);

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint UNSIGNED NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `items_id` bigint UNSIGNED NOT NULL,
  `quantity` int NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `code`, `items_id`, `quantity`, `type`, `note`, `date`, `created_at`, `updated_at`) VALUES
(1, 'TR-20240710-1', 1, 2, 'income', 'Pembelian dari Distributor ABC', '2024-07-10', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(2, 'TR-20240711-2', 3, 1, 'income', 'Pembelian dari Supplier XYZ', '2024-07-11', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(3, 'TR-20240712-3', 5, 5, 'income', 'Pembelian dari Grosir PQR', '2024-07-12', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(4, 'TR-20240713-4', 7, 3, 'income', 'Pembelian dari Distributor DEF', '2024-07-13', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(5, 'TR-20240714-5', 9, 2, 'income', 'Pembelian dari Supplier UVW', '2024-07-14', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(6, 'TR-20240715-6', 11, 4, 'income', 'Pembelian dari Grosir MNO', '2024-07-15', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(7, 'TR-20240716-7', 13, 1, 'income', 'Pembelian dari Distributor GHI', '2024-07-16', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(8, 'TR-20240717-8', 15, 3, 'income', 'Pembelian dari Supplier STU', '2024-07-17', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(9, 'TR-20240718-9', 17, 2, 'income', 'Pembelian dari Grosir JKL', '2024-07-18', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(10, 'TR-20240719-10', 19, 4, 'income', 'Pembelian dari Distributor VWX', '2024-07-19', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(11, 'TR-20240710-11', 2, 1, 'outcome', 'Penjualan ke Pelanggan Alpha', '2024-07-10', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(12, 'TR-20240711-12', 4, 2, 'outcome', 'Penjualan ke Pelanggan Beta', '2024-07-11', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(13, 'TR-20240712-13', 6, 3, 'outcome', 'Penjualan ke Pelanggan Gamma', '2024-07-12', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(14, 'TR-20240713-14', 8, 1, 'outcome', 'Penjualan ke Pelanggan Delta', '2024-07-13', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(15, 'TR-20240714-15', 10, 2, 'outcome', 'Penjualan ke Pelanggan Epsilon', '2024-07-14', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(16, 'TR-20240715-16', 12, 1, 'outcome', 'Penjualan ke Pelanggan Zeta', '2024-07-15', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(17, 'TR-20240716-17', 14, 4, 'outcome', 'Penjualan ke Pelanggan Eta', '2024-07-16', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(18, 'TR-20240717-18', 16, 2, 'outcome', 'Penjualan ke Pelanggan Theta', '2024-07-17', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(19, 'TR-20240718-19', 18, 1, 'outcome', 'Penjualan ke Pelanggan Iota', '2024-07-18', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(20, 'TR-20240719-20', 20, 3, 'outcome', 'Penjualan ke Pelanggan Kappa', '2024-07-19', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(21, 'TR-20240720-21', 1, 3, 'income', 'Pembelian dari Distributor LMN', '2024-07-20', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(22, 'TR-20240721-22', 3, 2, 'income', 'Pembelian dari Supplier OPQ', '2024-07-21', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(23, 'TR-20240722-23', 5, 4, 'income', 'Pembelian dari Grosir RST', '2024-07-22', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(24, 'TR-20240723-24', 7, 1, 'income', 'Pembelian dari Distributor UVW', '2024-07-23', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(25, 'TR-20240724-25', 9, 3, 'income', 'Pembelian dari Grosir XYZ', '2024-07-24', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(26, 'TR-20240725-26', 11, 2, 'income', 'Pembelian dari Supplier ABC', '2024-07-25', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(27, 'TR-20240726-27', 13, 5, 'income', 'Pembelian dari Distributor DEF', '2024-07-26', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(28, 'TR-20240727-28', 15, 2, 'income', 'Pembelian dari Grosir GHI', '2024-07-27', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(29, 'TR-20240728-29', 17, 4, 'income', 'Pembelian dari Supplier JKL', '2024-07-28', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(30, 'TR-20240729-30', 19, 1, 'income', 'Pembelian dari Distributor MNO', '2024-07-29', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(31, 'TR-20240720-31', 2, 2, 'outcome', 'Penjualan ke Pelanggan Alpha', '2024-07-20', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(32, 'TR-20240721-32', 4, 1, 'outcome', 'Penjualan ke Pelanggan Beta', '2024-07-21', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(33, 'TR-20240722-33', 6, 4, 'outcome', 'Penjualan ke Pelanggan Gamma', '2024-07-22', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(34, 'TR-20240723-34', 8, 2, 'outcome', 'Penjualan ke Pelanggan Delta', '2024-07-23', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(35, 'TR-20240724-35', 10, 1, 'outcome', 'Penjualan ke Pelanggan Epsilon', '2024-07-24', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(36, 'TR-20240725-36', 12, 3, 'outcome', 'Penjualan ke Pelanggan Zeta', '2024-07-25', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(37, 'TR-20240726-37', 14, 2, 'outcome', 'Penjualan ke Pelanggan Eta', '2024-07-26', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(38, 'TR-20240727-38', 16, 5, 'outcome', 'Penjualan ke Pelanggan Theta', '2024-07-27', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(39, 'TR-20240728-39', 18, 2, 'outcome', 'Penjualan ke Pelanggan Iota', '2024-07-28', '2024-07-14 08:17:06', '2024-07-14 08:17:06'),
(40, 'TR-20240729-40', 20, 1, 'outcome', 'Penjualan ke Pelanggan Kappa', '2024-07-29', '2024-07-14 08:17:06', '2024-07-14 08:17:06');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `items_code_unique` (`code`),
  ADD KEY `id_items_cateogies` (`categories_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_transactions_items` (`items_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `id_items_cateogies` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `id_transactions_items` FOREIGN KEY (`items_id`) REFERENCES `items` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
