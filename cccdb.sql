-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema cccdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema cccdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cccdb` DEFAULT CHARACTER SET utf8 ;
USE `cccdb` ;

-- -----------------------------------------------------
-- Table `cccdb`.`Player`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cccdb`.`Player` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `gender` VARCHAR(1) NULL DEFAULT 'M',
  `phone_US` VARCHAR(10) NULL,
  `other_details` VARCHAR(140) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cccdb`.`League`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cccdb`.`League` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `details` VARCHAR(140) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cccdb`.`Opponent`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cccdb`.`Opponent` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `home_ground` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cccdb`.`Match`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cccdb`.`Match` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NULL,
  `result` VARCHAR(45) NULL,
  `summary` VARCHAR(500) NULL,
  `Player_id1` INT NULL,
  `Player_id2` INT NULL,
  `Player_id3` INT NULL,
  `Player_id4` INT NULL,
  `Player_id5` INT NULL,
  `Player_id6` INT NULL,
  `Player_id7` INT NULL,
  `Player_id8` INT NULL,
  `Player_id9` INT NULL,
  `Player_id10` INT NULL,
  `Player_id11` INT NULL,
  `Player_id12` INT NULL,
  `League_id` INT NOT NULL,
  `venue` VARCHAR(45) NULL,
  `umpire1` VARCHAR(45) NULL,
  `umpire2` VARCHAR(45) NULL,
  `opponent` VARCHAR(45) NULL,
  `Opponent_id` INT NOT NULL,
  `final_score` VARCHAR(45) NULL,
  `opp_final_score` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cccdb`.`Stat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cccdb`.`Stat` (
  `id` INT NOT NULL,
  `Match_id` INT NOT NULL,
  `League_id` INT NOT NULL,
  `Player_id` INT NOT NULL,
  `battingO` INT NULL,
  `R` INT NULL,
  `BF` INT NULL,
  `HO` VARCHAR(45) NULL,
  `SR` DOUBLE NULL,
  `sixes` INT NULL,
  `fours` INT NULL,
  `bowlingO` INT NULL,
  `overs` INT NULL,
  `RC` INT NULL,
  `economy` DOUBLE NULL,
  `wickets` INT NULL,
  `wides` INT NULL,
  `noballs` INT NULL,
  `stumpings` INT NULL,
  `catches` INT NULL,
  `drops` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cccdb`.`Membership`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cccdb`.`Membership` (
  `id` INT NOT NULL,
  `tier` VARCHAR(45) NULL,
  `fees_to_be_paid` INT NULL,
  `fees_paid` INT NULL,
  `Player_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Player_id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
