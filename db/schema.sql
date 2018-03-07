-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgersApp_db;
-- Creates the "burgersApp_db" database --
CREATE DATABASE burgersApp_db;

-- Makes it so all of the following code will affect animals_db --
USE burgersApp_db;

-- Creates the table "people" within animals_db --
CREATE TABLE burgers (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  burgerName VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  eaten BOOLEAN NOT NULL,
  
  PRIMARY KEY (id)
);