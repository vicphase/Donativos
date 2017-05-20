CREATE TABLE colaborador(
     id INT NOT NULL AUTO_INCREMENT,
     nombre VARCHAR(255) NOT NULL,
     apellidoPaterno VARCHAR(255) NOT NULL,
     apellidoMaterno VARCHAR(255) NOT NULL,
     calle VARCHAR (255) NOT NULL,
     numero VARCHAR (255) NOT NULL,
     idColonia VARCHAR (255) NOT NULL,
     ciudad VARCHAR(255) NOT NULL,
     estado VARCHAR(255) NOT NULL,
     telefonoLocal VARCHAR(255) NOT NULL,
     telefonoCelular VARCHAR(255) NOT NULL,
     correo VARCHAR(255) NOT NULL,
     rol VARCHAR(255) NOT NULL,
     idUsuario VARCHAR (255) NOT NULL
     PRIMARY KEY (id)

        FOREIGN KEY (idColonia)
        REFERENCES colonia(id)

                FOREIGN KEY (idUsuario)
        REFERENCES usuario(id)
)
