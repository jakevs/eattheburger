DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE bugers (
    id INTEGER AUTO_INCREMENT NOT NULL,
    burger_type VARCHAR(225),
    eaten BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);