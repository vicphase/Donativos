CREATE TABLE donativo(
     id INT NOT NULL AUTO_INCREMENT,
     fechaNacimiento DATE NOT NULL,
     concepto VARCHAR (255) NOT NULL,
     monto DOUBLE NOT NULL,
     folioRecibo VARCHAR (255) NOT NULL,
     referencia VARCHAR (255) NOT NULL,
     idBienhechor INT NOT NULL,
     idColaborador INT NOT NULL
     PRIMARY KEY (id)

             FOREIGN KEY (idBienhechor)
        REFERENCES bienhechor(id)

                FOREIGN KEY (idColaborador)
        REFERENCES colaborador(id)

)
