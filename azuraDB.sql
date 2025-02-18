CREATE DATABASE Azura;
USE Azura;

CREATE TABLE vehicles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(100),
    model VARCHAR(100),
    km INT,
    color VARCHAR(50),
    location VARCHAR(100),
    value DECIMAL(10, 2)
);

DELIMITER $$

CREATE PROCEDURE InsertVehicle(
    IN make VARCHAR(255),
    IN model VARCHAR(255),
    IN km INT,
    IN color VARCHAR(255),
    IN location VARCHAR(255),
    IN value DECIMAL(10, 2)
)
BEGIN
    INSERT INTO vehicles (make, model, km, color, location, value)
    VALUES (make, model, km, color, location, value);
END$$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE GetAllVehicles()
BEGIN
    SELECT * FROM vehicles;
END$$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE GetVehicleById(IN vehicleId INT)
BEGIN
    SELECT * FROM vehicles WHERE id = vehicleId;
END$$

DELIMITER ;