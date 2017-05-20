<?php

/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/7/2017
 * Time: 4:17 PM
 */

require('DBClass.php');

class BienHechoresDAO
{

    public static function getBienHechores()
    {
        $bienHechores = array();

        $db_bienHechores = DBClass::query('SELECT * FROM bienhechores');

        $n = mysqli_num_rows($db_bienHechores);

        for ($i = 0; $i < $n; $i++) {
            $tupla = mysqli_fetch_array($db_bienHechores, MYSQLI_ASSOC);
            array_push($bienHechores, $tupla);
        }
        return $bienHechores;
    }
    
    public static function getBienHechor($id){
        
        $db_bienHechor = DBClass::query('SELECT * FROM bienhechores WHERE id='.$id);
        $bienHechor = mysqli_fetch_array($db_bienHechor, MYSQLI_ASSOC);
        return $bienHechor;
        
    }

    public static function postBienHechor(BienHechor $bienHechor)
    {

        $nombre=$bienHechor->getNombre();
        $apellidoPaterno=$bienHechor->getApellidoPaterno();
        $apellidoMaterno=$bienHechor->getApellidoMaterno();
        $direccion=$bienHechor->getDireccion();
        $ciudad=$bienHechor->getCiudad();
        $estado=$bienHechor->getEstado();
        $telefonoLocal=$bienHechor->getTelefonoLocal();
        $telefonoCelular=$bienHechor->getTelefonoCelular();
        $correo=$bienHechor->getCorreo();
        $fechaNacimiento=$bienHechor->getFechaNacimiento();
        $frecuenciaDonativo=$bienHechor->getFrecuenciaDonativo();
        $metodoAportacion=$bienHechor->getMetodoAportacion();
        $zona=$bienHechor->getZona();
        $sector=$bienHechor->getSector();

        DBClass::query("INSERT INTO bienhechores 
        (nombre,
        apellidoPaterno, 
        apellidoMaterno, 
        direccion, 
        ciudad, 
        estado, 
        telefonoLocal, 
        telefonoCelular, 
        correo, 
        fechaNacimiento, 
        frecuenciaDonativo, 
        metodoAportacion, 
        zona, 
        sector)
        VALUES ("."'".$nombre."'".', '
        ."'".$apellidoPaterno."'".', '
            ."'".$apellidoMaterno."'".', '
            ."'".$direccion."'".', '
            ."'".$ciudad."'".', '
            ."'".$estado."'".', '
            ."'".$telefonoLocal."'".', '
            ."'".$telefonoCelular."'".', '
            ."'".$correo."'".', '
            ."'".$fechaNacimiento."'".', '
            ."'".$frecuenciaDonativo."'".', '
            ."'".$metodoAportacion."'".', '
            ."'".$zona."'".', '
            ."'".$sector."'".")");

    }

    public static function updateBienHechor($bienHechor){

        $id=$bienHechor->getId();
        $nombre=$bienHechor->getNombre();
        $apellidoPaterno=$bienHechor->getApellidoPaterno();
        $apellidoMaterno=$bienHechor->getApellidoMaterno();
        $direccion=$bienHechor->getDireccion();
        $ciudad=$bienHechor->getCiudad();
        $estado=$bienHechor->getEstado();
        $telefonoLocal=$bienHechor->getTelefonoLocal();
        $telefonoCelular=$bienHechor->getTelefonoCelular();
        $correo=$bienHechor->getCorreo();
        $fechaNacimiento=$bienHechor->getFechaNacimiento();
        $frecuenciaDonativo=$bienHechor->getFrecuenciaDonativo();
        $metodoAportacion=$bienHechor->getMetodoAportacion();
        $zona=$bienHechor->getZona();
        $sector=$bienHechor->getSector();

        DBClass::query("UPDATE bienhechores
        SET nombre="."'".$nombre."',
        apellidoPaterno="."'".$apellidoPaterno."',
        apellidoMaterno="."'".$apellidoMaterno."',
        direccion="."'".$direccion."',
        ciudad="."'".$ciudad."',
        estado="."'".$estado."',
        telefonoLocal="."'".$telefonoLocal."',
        telefonoCelular="."'".$telefonoCelular."',
        correo="."'".$correo."',
        fechaNacimiento="."'".$fechaNacimiento."',
        frecuenciaDonativo="."'".$frecuenciaDonativo."',
        metodoAportacion="."'".$metodoAportacion."',
        zona="."'".$zona."',
        sector="."'".$sector."'
        WHERE id=".$id
        );
    }

    public static function deleteBienHechor($id){
        DBClass::query("DELETE FROM bienhechores 
          WHERE id=".$id);
    }

}