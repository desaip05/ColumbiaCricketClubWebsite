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
  `phone_US` VARCHAR(10) NOT NULL,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `email_id` VARCHAR(255) NULL,
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
  PRIMARY KEY (`id`),
  INDEX `fk_Match_Player1_idx` (`Player_id1` ASC),
  INDEX `fk_Match_Player2_idx` (`Player_id2` ASC),
  INDEX `fk_Match_Player4_idx` (`Player_id3` ASC),
  INDEX `fk_Match_Player5_idx` (`Player_id4` ASC),
  INDEX `fk_Match_Player6_idx` (`Player_id5` ASC),
  INDEX `fk_Match_Player7_idx` (`Player_id6` ASC),
  INDEX `fk_Match_Player8_idx` (`Player_id7` ASC),
  INDEX `fk_Match_Player9_idx` (`Player_id8` ASC),
  INDEX `fk_Match_Player10_idx` (`Player_id9` ASC),
  INDEX `fk_Match_Player11_idx` (`Player_id10` ASC),
  INDEX `fk_Match_Player12_idx` (`Player_id11` ASC),
  INDEX `fk_Match_Player3_idx` (`Player_id12` ASC),
  INDEX `fk_Match_League1_idx` (`League_id` ASC),
  INDEX `fk_Match_Opponent1_idx` (`Opponent_id` ASC),
  CONSTRAINT `fk_Match_Player1`
    FOREIGN KEY (`Player_id1`)
    REFERENCES `cccdb`.`Player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Match_Player2`
    FOREIGN KEY (`Player_id2`)
    REFERENCES `cccdb`.`Player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Match_Player4`
    FOREIGN KEY (`Player_id3`)
    REFERENCES `cccdb`.`Player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Match_Player5`
    FOREIGN KEY (`Player_id4`)
    REFERENCES `cccdb`.`Player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Match_Player6`
    FOREIGN KEY (`Player_id5`)
    REFERENCES `cccdb`.`Player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Match_Player7`
    FOREIGN KEY (`Player_id6`)
    REFERENCES `cccdb`.`Player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Match_Player8`
    FOREIGN KEY (`Player_id7`)
    REFERENCES `cccdb`.`Player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Match_Player9`
    FOREIGN KEY (`Player_id8`)
    REFERENCES `cccdb`.`Player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Match_Player10`
    FOREIGN KEY (`Player_id9`)
    REFERENCES `cccdb`.`Player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Match_Player11`
    FOREIGN KEY (`Player_id10`)
    REFERENCES `cccdb`.`Player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Match_Player12`
    FOREIGN KEY (`Player_id11`)
    REFERENCES `cccdb`.`Player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Match_Player3`
    FOREIGN KEY (`Player_id12`)
    REFERENCES `cccdb`.`Player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Match_League1`
    FOREIGN KEY (`League_id`)
    REFERENCES `cccdb`.`League` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Match_Opponent1`
    FOREIGN KEY (`Opponent_id`)
    REFERENCES `cccdb`.`Opponent` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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
  PRIMARY KEY (`id`),
  INDEX `fk_Stat_Match1_idx` (`Match_id` ASC),
  INDEX `fk_Stat_League1_idx` (`League_id` ASC),
  INDEX `fk_Stat_Player1_idx` (`Player_id` ASC),
  CONSTRAINT `fk_Stat_Match1`
    FOREIGN KEY (`Match_id`)
    REFERENCES `cccdb`.`Match` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Stat_League1`
    FOREIGN KEY (`League_id`)
    REFERENCES `cccdb`.`League` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Stat_Player1`
    FOREIGN KEY (`Player_id`)
    REFERENCES `cccdb`.`Player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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
  PRIMARY KEY (`id`, `Player_id`),
  INDEX `fk_Membership_Player1_idx` (`Player_id` ASC),
  CONSTRAINT `fk_Membership_Player1`
    FOREIGN KEY (`Player_id`)
    REFERENCES `cccdb`.`Player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cccdb`.`Role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cccdb`.`Role` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cccdb`.`Role_permission`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cccdb`.`Role_permission` (
  `Role_id` INT NOT NULL,
  `permission` VARCHAR(255) NULL,
  INDEX `fk_Role_permission_Role1_idx` (`Role_id` ASC),
  CONSTRAINT `fk_Role_permission_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `cccdb`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cccdb`.`Player_roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cccdb`.`Player_roles` (
  `Role_id` INT NOT NULL,
  `Player_id` INT NOT NULL,
  `role_name` VARCHAR(45) NULL,
  INDEX `fk_Player_roles_Role1_idx` (`Role_id` ASC),
  INDEX `fk_Player_roles_Player1_idx` (`Player_id` ASC),
  CONSTRAINT `fk_Player_roles_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `cccdb`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Player_roles_Player1`
    FOREIGN KEY (`Player_id`)
    REFERENCES `cccdb`.`Player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
