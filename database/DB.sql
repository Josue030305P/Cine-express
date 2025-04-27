CREATE DATABASE cine;
USE cine;

CREATE TABLE peliculas(
id			INT PRIMARY KEY AUTO_INCREMENT,
titulo		VARCHAR(80) NOT NULL,
director	VARCHAR(50) NOT NULL,
lanzamiento DATE NOT NULL,
calificacion  ENUM('1','2','3','4','5'),
genero		VARCHAR(30) NOT NULL

)ENGINE=InnoDB;

INSERT INTO peliculas(titulo,director,lanzamiento,calificacion,genero)
			VALUES('The Thunderbols','Juan perez Munayco Salazar','2025-05-05','5','Super heroes');
            
 