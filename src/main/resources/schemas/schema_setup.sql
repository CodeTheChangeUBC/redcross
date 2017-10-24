DROP DATABASE IF EXISTS redcross;

CREATE DATABASE redcross;

CREATE USER IF NOT EXISTS 'recross_user'@'localhost' IDENTIFIED BY 'recross_user';
GRANT ALL PRIVILEGES ON redcross . * TO 'recross_user'@'localhost';
