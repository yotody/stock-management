-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 25, 2022 at 01:00 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stockdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `Product_name` varchar(255) NOT NULL,
  `Product_catagory` varchar(255) NOT NULL,
  `Product_quantity` int(255) NOT NULL,
  `vat_or_tot` text NOT NULL,
  `Product_measurment_type` varchar(255) NOT NULL,
  `Product_price_before_vat_or_tot` int(255) NOT NULL,
  `Product_expire_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `Product_name`, `Product_catagory`, `Product_quantity`, `vat_or_tot`, `Product_measurment_type`, `Product_price_before_vat_or_tot`, `Product_expire_date`) VALUES
(1, 'milk', 'drink', 20, 'Vat', 'liter', 10, '2022-07-23'),
(2, 'Dell', 'Laptop', 20, 'Vat', 'Piece', 20000, '0000-00-00'),
(3, 'mac', 'Laptop', 10, 'Vat', 'Piece', 25000, '0000-00-00'),
(4, 'apple', 'food', 1000, 'Vat', 'kg', 20, '2022-09-23'),
(6, 'Sky Soap', 'Soap', 40, 'Vat', 'Piece', 25, '2022-08-23'),
(12, 'orange', 'fruit', 500, 'Vat', 'kg', 80, '2022-08-23'),
(34, 'samsung', 'mobile', 200, 'Vat', 'Piece', 12000, '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `usertype` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `lastname`, `firstname`, `username`, `password`, `usertype`) VALUES
(2, 'aimabel', 'yab ', 'aimabel', '090909', 'subadmin'),
(3, 'habtu', 'yeabsra', 'magtaaa', '090909', 'mainadmin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
