<?php

require('DBClass.php');

class ColaboradorDAO
{

    public static function getColaboradores()
    {
        $colaboradores = array();

        $db_colaboradores = DBClass::query('SELECT * FROM colaborador');

        $n = mysqli_num_rows($db_colaboradores);

        for ($i = 0; $i < $n; $i++) {
            $tupla = mysqli_fetch_array($db_colaboradores, MYSQLI_ASSOC);
            array_push($colaboradores, $tupla);
        }
        return $colaboradores;
    }

    public static function getColaborador()
    {

        $db_colaboradores = DBClass::query('SELECT * FROM colaborador');
        
        
            $tupla = mysqli_fetch_array($db_colaboradores, MYSQLI_ASSOC);

        return $tupla;
    }


    public static function postColaborador(Colaborador $Colaborador)
    {

        $nombre=$Colaborador->getNombre();
        $apellidoPaterno=$Colaborador->getApellidoPaterno();
        $apellidoMaterno=$Colaborador->getApellidoMaterno();
        $calle=$Colaborador->getCalle();
        $numero=$Colaborador->getNumero();
        $idColonia=$Colaborador->getIdcolonia();
        $ciudad=$Colaborador->getCiudad();
        $estado=$Colaborador->getEstado();
        $telefonoLocal=$Colaborador->getTelefonoLocal();
        $telefonoCelular=$Colaborador->getTelefonoCelular();
        $correo=$Colaborador->getCorreo();
        $rol=$Colaborador->getRol();
        $idUsuario=$Colaborador->getIdusuario();

        DBClass::query("INSERT INTO colaborador
        (nombre,
        apellidoPaterno, 
        apellidoMaterno, 
        calle, 
        numero,
        idColonia,
        ciudad,
        estado,
        telefonoLocal, 
        telefonoCelular, 
        correo, 
        rol,
        idUsuario)
        VALUES ("."'".$nombre."'".', '
        ."'".$apellidoPaterno."'".', '
            ."'".$apellidoMaterno."'".', '
            ."'".$calle."'".', '
            ."'".$numero."'".', '
            ."'".$idColonia."'".', '
            ."'".$ciudad."'".', '
            ."'".$estado."'".', '
            ."'".$telefonoLocal."'".', '
            ."'".$telefonoCelular."'".', '
            ."'".$correo."'".', '
            ."'".$rol."'".', '
            ."'".$idUsuario."'".")");
    }

    public static function updateColaborador(Colaborador $Colaborador){

        $id=$Colaborador->getId();
        $nombre=$Colaborador->getNombre();
        $apellidoPaterno=$Colaborador->getApellidoPaterno();
        $apellidoMaterno=$Colaborador->getApellidoMaterno();
        $calle=$Colaborador->getCalle();
        $numero=$Colaborador->getNumero();
        $idColonia=$Colaborador->getIdcolonia();
        $ciudad=$Colaborador->getCiudad();
        $estado=$Colaborador->getEstado();
        $telefonoLocal=$Colaborador->getTelefonoLocal();
        $telefonoCelular=$Colaborador->getTelefonoCelular();
        $correo=$Colaborador->getCorreo();
        $rol=$Colaborador->getRol();
        $idUsuario=$Colaborador->getIdusuario();

        DBClass::query("UPDATE colaboradores
        SET nombre="."'".$nombre."',
        apellidoPaterno="."'".$apellidoPaterno."',
        apellidoMaterno="."'".$apellidoMaterno."',
        calle="."'".$calle."',
        numero="."'".$numero."',
        idColonia="."'".$idColonia."',
        ciudad="."'".$ciudad."',
        estado="."'".$estado."',
        telefonoLocal="."'".$telefonoLocal."',
        telefonoCelular="."'".$telefonoCelular."',
        correo="."'".$correo."',
        rol="."'".$rol."',
        idUsuario="."'".$idUsuario."'
        WHERE id=".$id
        );
    }

    public static function deleteColaborador($id){
        DBClass::query("DELETE FROM colaborador
          WHERE id=".$id);
    }
}