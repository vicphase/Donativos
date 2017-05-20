<?php

require('DBClass.php');

class ColaboradorDAO
{

    public static function getColaboradores()
    {
        $colaboradores = array();

        $db_colaboradores = DBClass::query('SELECT * FROM colaboradores');

        $n = mysqli_num_rows($db_colaboradores);

        for ($i = 0; $i < $n; $i++) {
            $tupla = mysqli_fetch_array($db_colaboradores, MYSQLI_ASSOC);
            array_push($colaboradores, $tupla);
        }
        return $colaboradores;
    }

    public static function postColaborador(Colaborador $Colaborador)
    {

        $nombre=$Colaborador->getNombre();
        $apellidoPaterno=$Colaborador->getApellidoPaterno();
        $apellidoMaterno=$Colaborador->getApellidoMaterno();
        $calle=$Colaborador->getCalle();
        $numeroext=$Colaborador->getNumeroext();
        $colonia=$Colaborador->getColonia();
        $ciudad=$Colaborador->getCiudad();
        $estado=$Colaborador->getEstado();
        $telefonoLocal=$Colaborador->getTelefonoLocal();
        $telefonoCelular=$Colaborador->getTelefonoCelular();
        $correo=$Colaborador->getCorreo();
        $fechaNacimiento=$Colaborador->getFechaNacimiento();
        $rol=$Colaborador->getRol();
        $zona=$Colaborador->getZona();
        $sector=$Colaborador->getSector();

        DBClass::query("INSERT INTO colaboradores 
        (nombre,
        apellidoPaterno, 
        apellidoMaterno, 
        calle, 
        numeroext,
        colonia,
        ciudad,
        estado,
        telefonoLocal, 
        telefonoCelular, 
        correo, 
        fechaNacimiento,
        rol,
        zona,
        sector)
        VALUES ("."'".$nombre."'".', '
        ."'".$apellidoPaterno."'".', '
            ."'".$apellidoMaterno."'".', '
            ."'".$calle."'".', '
            ."'".$numeroext."'".', '
            ."'".$colonia."'".', '
            ."'".$ciudad."'".', '
            ."'".$estado."'".', '
            ."'".$telefonoLocal."'".', '
            ."'".$telefonoCelular."'".', '
            ."'".$correo."'".', '
            ."'".$fechaNacimiento."'".', '
            ."'".$rol."'".', '
            ."'".$zona."'".', '
            ."'".$sector."'".")");
    }

    public static function updateColaborador($Colaborador){

        $nombre=$Colaborador->getNombre();
        $apellidoPaterno=$Colaborador->getApellidoPaterno();
        $apellidoMaterno=$Colaborador->getApellidoMaterno();
        $calle=$Colaborador->getCalle();
        $numeroext=$Colaborador->getNumeroext();
        $colonia=$Colaborador->getColonia();
        $ciudad=$Colaborador->getCiudad();
        $estado=$Colaborador->getEstado();
        $telefonoLocal=$Colaborador->getTelefonoLocal();
        $telefonoCelular=$Colaborador->getTelefonoCelular();
        $correo=$Colaborador->getCorreo();
        $fechaNacimiento=$Colaborador->getFechaNacimiento();
        $rol=$Colaborador->getRol();
        $zona=$Colaborador->getZona();
        $sector=$Colaborador->getSector();

        DBClass::query("UPDATE colaboradores
        SET nombre="."'".$nombre."',
        apellidoPaterno="."'".$apellidoPaterno."',
        apellidoMaterno="."'".$apellidoMaterno."',
        calle="."'".$calle."',
        numeroext="."'".$numeroext."',
        colonia="."'".$colonia."',
        ciudad="."'".$ciudad."',
        estado="."'".$estado."',
        telefonoLocal="."'".$telefonoLocal."',
        telefonoCelular="."'".$telefonoCelular."',
        correo="."'".$correo."',
        fechaNacimiento="."'".$fechaNacimiento."',
        rol="."'".$rol."',
        zona="."'".$zona."',
        sector="."'".$sector."'
        WHERE id=".$id
        );
    }

    public static function deleteColaborador($id){
        DBClass::query("DELETE FROM colaboradores 
          WHERE id=".$id);
    }
}