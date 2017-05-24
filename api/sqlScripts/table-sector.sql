CREATE TABLE sector (
  id INT NOT NULL AUTO_INCREMENT,
    nombre varchar(255) NOT NULL,
  idZona INT NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (idZona)
        REFERENCES zona(id)
)