-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2025 at 10:08 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `studyhub`
--

-- --------------------------------------------------------

--
-- Table structure for table `study_sessions`
--

CREATE TABLE `study_sessions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `minutes` int(11) NOT NULL,
  `session_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`) VALUES
(1, 'rayanefat', 'rayanefat@gmail.com', '123', '2025-05-25 22:22:53'),
(3, 'testuser', 'testuser@example.com', '$2y$10$6uaAfZUkqOzf9kZC.4C7HeEoEw90Od/EKhws0a34J7M5bAF3By2uW', '2025-05-26 02:09:12'),
(5, 'rayanefatima', 'rayanefatimazohra1@gmail.com', '$2y$10$S2MGD2dEil4CLLHHJdsBJeNwmq2JBXHWMxFL2GsNEXzuzCP521FL.', '2025-05-26 02:54:26'),
(6, 'rayanefatimaa', 'rayanefatimazohraa1@gmail.com', '$2y$10$BqRBhZ2.RG153M/rQqefJuYnnECsgb1uYi4JuR5G.yGG2IhkYSLq.', '2025-05-26 03:01:34'),
(9, 'dalia', 'daliarayane444@gmail.com', '$2y$10$5gBnfA3qlplLgJVw1S/AvOTlg0Aoibs8w4S16ieKwo89Mh6hJvjAS', '2025-05-26 17:48:34'),
(10, 'zolarayayayaya', 'rayanefatimazohra12@gmail.com', '$2y$10$DfVwfzopAHyOvf8ocshFB.h6Fzbt3e3mRRuHqK.g9IUmHQLwXPKTa', '2025-05-26 17:52:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `study_sessions`
--
ALTER TABLE `study_sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `study_sessions`
--
ALTER TABLE `study_sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `study_sessions`
--
ALTER TABLE `study_sessions`
  ADD CONSTRAINT `study_sessions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
