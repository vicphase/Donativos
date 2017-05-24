CREATE TABLE colonia (
  id INT NOT NULL AUTO_INCREMENT,
  nombre varchar(255) NOT NULL,
  idSector INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (idSector)
        REFERENCES sector(id)
)