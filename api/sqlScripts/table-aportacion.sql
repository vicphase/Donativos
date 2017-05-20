CREATE TABLE aportacion (
  id INT NOT NULL AUTO_INCREMENT,
  monto DOUBLE NOT NULL,
  frecuenciaMensual DOUBLE NOT NULL,
  metodoAportacion VARCHAR(255) NOT NULL,
  idBienhechor INT NOT NULL
   PRIMARY KEY (id)
   FOREIGN KEY (idBienhechor)
        REFERENCES bienhechor(id)
)