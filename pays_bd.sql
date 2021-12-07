-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Mar 07 Décembre 2021 à 16:26
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `pays_bd`
--

-- --------------------------------------------------------

--
-- Structure de la table `commune`
--

CREATE TABLE IF NOT EXISTS `commune` (
  `code_commune` varchar(20) NOT NULL,
  `Nom_commune` varchar(20) NOT NULL,
  `population_2010` int(11) NOT NULL,
  `population_1999` int(11) NOT NULL,
  `Surface` varchar(20) NOT NULL,
  `longitude` varchar(20) NOT NULL,
  `latitude` varchar(20) NOT NULL,
  `num_departement` varchar(20) NOT NULL,
  `code_region` varchar(20) NOT NULL,
  PRIMARY KEY (`code_commune`),
  KEY `num_departement` (`num_departement`),
  KEY `code_region` (`code_region`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `commune`
--

INSERT INTO `commune` (`code_commune`, `Nom_commune`, `population_2010`, `population_1999`, `Surface`, `longitude`, `latitude`, `num_departement`, `code_region`) VALUES
('13001', 'marseille', 850700, 797491, '240,6 km²', '43.17817', '5.228642', '13', 'PACA'),
('35000', 'Rennes', 206600, 206194, '50,39', '48.117266', '-1.6777926', '35', 'BRE'),
('91400', 'orsay', 15500, 16219, '8 km²', '48.6981', '2.18583', '91', 'IDF');

-- --------------------------------------------------------

--
-- Structure de la table `departements`
--

CREATE TABLE IF NOT EXISTS `departements` (
  `num_departement` varchar(20) NOT NULL,
  `nom_departement` varchar(20) NOT NULL,
  `code_region` varchar(20) NOT NULL,
  PRIMARY KEY (`num_departement`),
  KEY `code_region` (`code_region`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `departements`
--

INSERT INTO `departements` (`num_departement`, `nom_departement`, `code_region`) VALUES
('13', 'BOUCHES-DU-RHONE', 'PACA'),
('35', 'ILLE-ET-VILAINE', 'BRE'),
('91', 'ESSONE', 'IDF');

-- --------------------------------------------------------

--
-- Structure de la table `regions`
--

CREATE TABLE IF NOT EXISTS `regions` (
  `code_region` varchar(20) NOT NULL,
  `nom_region` varchar(20) NOT NULL,
  PRIMARY KEY (`code_region`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `regions`
--

INSERT INTO `regions` (`code_region`, `nom_region`) VALUES
('BRE', 'bretagne'),
('IDF', 'ile de france'),
('PACA', 'provence alpes cote ');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `commune`
--
ALTER TABLE `commune`
  ADD CONSTRAINT `commune_ibfk_1` FOREIGN KEY (`code_region`) REFERENCES `regions` (`code_region`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `commune_ibfk_2` FOREIGN KEY (`num_departement`) REFERENCES `departements` (`num_departement`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `departements`
--
ALTER TABLE `departements`
  ADD CONSTRAINT `departements_ibfk_3` FOREIGN KEY (`code_region`) REFERENCES `regions` (`code_region`) ON DELETE CASCADE ON UPDATE CASCADE;
