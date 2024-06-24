-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 24 Jun 2024 pada 18.18
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pawdb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `book`
--

CREATE TABLE `book` (
  `id` int(10) NOT NULL,
  `name` varchar(25) NOT NULL,
  `nophone` int(15) NOT NULL,
  `email` varchar(25) NOT NULL,
  `type` varchar(15) NOT NULL,
  `namepet` varchar(25) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `ras` varchar(15) NOT NULL,
  `age` text NOT NULL,
  `weight` text NOT NULL,
  `complaint` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `book`
--

INSERT INTO `book` (`id`, `name`, `nophone`, `email`, `type`, `namepet`, `gender`, `ras`, `age`, `weight`, `complaint`) VALUES
(1, 'Muhammad Rizky Ramadhan', 2147483647, 'rr32vzgl@gmail.com', 'dog', 'danu', 'male', 'american`', '1 tahun', '5 kg', 'sering sakit tanpa sebab'),
(3, 'Muhammad Rizky Ramadhan', 2147483647, 'rr32vzgl@gmail.com', 'dog', 'dea', 'famale', 'papua', '2 bulan', '5 kg', 'sering sakit tanpa sebab'),
(4, 'Muhammad Rizky Ramadhan', 2147483647, 'rr32vzgl@gmail.com', 'dog', 'dea', 'famale', 'papua', '2 bulan', '5 kg', 'sering sakit tanpa sebab'),
(13, 'Muhammad Rizky Ramadhan', 2147483647, 'rizky@apiary.id', 'dog', 'danu', 'male', 'papuan', '5 bulan', '2 kg', 'sering sakit tanpa sebab'),
(14, '', 0, '', '', '', '', '', '', '', ''),
(15, 'Muhammad Rizky Ramadhan', 2147483647, 'laras.bestari@tech.jago.c', 'dog', 'danuuu', 'male', 'indian', '4 bulan', '1 kg', 'sering sakit tanpa sebab'),
(16, '', 0, '', '', '', '', '', '', '', ''),
(17, 'Muhammad Rizky Ramadhan', 2147483647, 'cadanganrizdhan@gmail.com', 'anjing', 'doggie', 'male', 'papuan', '2 tahun', '2 kg', 'misuh misuh');

-- --------------------------------------------------------

--
-- Struktur dari tabel `login`
--

CREATE TABLE `login` (
  `id` int(10) NOT NULL,
  `name` varchar(25) NOT NULL,
  `email` varchar(25) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `login`
--

INSERT INTO `login` (`id`, `name`, `email`, `password`) VALUES
(1, 'dea', 'dea@gmail.com', '$2b$10$gcC8qEMeRzgTuUdQLtUB2u5hvlT4ir38LND8Syv84BtAKU3PmtaDO'),
(2, 'iky', 'iky@gmail.com', '$2b$10$4fW7Bz.TBJUs9WQv94M38.n0OkWcsHmr.W0RjZuBs0UTmBnbcRUQG'),
(3, 'kiki', 'kiki@gmail.com', '$2b$10$.TQk.PlHz8FL3nq4rmVsNOaSMqN2hBcflQgXWuNCIITogjiqwI.ha'),
(4, 'baihaki', 'bai@gmail.com', '$2b$10$aW.tW9O4eF63HuSaQN2/qud8G.zDpOjpPKFGXqLp0RvJh82xK1H1e'),
(5, 'rizky', 'rizky@gmail.com', '$2b$10$Mdf6HmU9duHLCoqG70b7NerHKA6d6WlYh6PhaEvqr.uTSzqrawkJq');

-- --------------------------------------------------------

--
-- Struktur dari tabel `message`
--

CREATE TABLE `message` (
  `id` int(10) NOT NULL,
  `name` varchar(25) NOT NULL,
  `email` varchar(25) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `message`
--

INSERT INTO `message` (`id`, `name`, `email`, `message`) VALUES
(1, 'Muhammad Rizky Ramadhan', 'rr32vzgl@gmail.com', 'Semangat'),
(2, 'Muhammad Rizky Ramadhan', 'laras.bestari@tech.jago.c', 'isi'),
(3, 'Muhammad Rizky Ramadhan', 'rr32vzgl@gmail.com', 'Semangat'),
(4, 'Muhammad Rizky Ramadhan', 'cadanganrizdhan@gmail.com', 'test'),
(5, 'Muhammad Rizky Ramadhan', 'academy@apiary.id', 'pesan touch'),
(6, 'Muhammad Rizky Ramadhan', 'laras.bestari@tech.jago.c', 'love regi'),
(7, 'Muhammad Rizky Ramadhan', 'laras.bestari@tech.jago.c', 'love regi');

-- --------------------------------------------------------

--
-- Struktur dari tabel `thread`
--

CREATE TABLE `thread` (
  `id` int(10) NOT NULL,
  `judul` text NOT NULL,
  `isi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `thread`
--

INSERT INTO `thread` (`id`, `judul`, `isi`) VALUES
(1, 'test', 'isi'),
(2, 'Kenapa Hewan saya sering sakit', 'kenapa ya udah seharian hewan saya muntah muntah dan ga nafsu makan');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `thread`
--
ALTER TABLE `thread`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `book`
--
ALTER TABLE `book`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `login`
--
ALTER TABLE `login`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `message`
--
ALTER TABLE `message`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `thread`
--
ALTER TABLE `thread`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
