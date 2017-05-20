CREATE TABLE bienhechor(
     id INT NOT NULL AUTO_INCREMENT,
     nombre VARCHAR(64) NOT NULL,
     apellidoPaterno VARCHAR(64) NOT NULL,
     apellidoMaterno VARCHAR(64) NOT NULL,
     calle VARCHAR (64) NOT NULL,
     numero VARCHAR (64) NOT NULL,
     idColonia INT NOT NULL,
     ciudad VARCHAR(64) NOT NULL,
     estado VARCHAR(64) NOT NULL,
     telefonoLocal VARCHAR(64) NOT NULL,
     telefonoCelular VARCHAR(64) NOT NULL,
     correo VARCHAR(64) NOT NULL,
     fechaNacimiento DATE NOT NULL,
     nicho BOOLEAN NOT NULL
     PRIMARY KEY (id)

     FOREIGN KEY (idColonia)
        REFERENCES colonia(id)
)

INSERT INTO BienHechor (nombre, apellidoPaterno, apellidoMaterno, calle, numero, colonia ciudad, estado, telefonoLocal, telefonoCelular, correo, fechaNacimiento, frecuenciaDonativo, metodoAportacion, zona, sector)
VALUES ('Victor', 'Martinez', 'Valdes', 'Laderas', '118', 'Lomas del Vergel', 'Monterrey',  'Nuevo Leon', '1234', '1234', 'vikmtz@yahoo.com.mx', '1995-11-02T06:00:00.000Z', 'mensual', 'efectivo', '1', '1');
