<?php


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
        $calle=$bienHechor->getCalle();
        $numero=$bienHechor->getNumero();
        $ciudad=$bienHechor->getCiudad();
        $estado=$bienHechor->getEstado();
        $telefonoLocal=$bienHechor->getTelefonoLocal();
        $telefonoCelular=$bienHechor->getTelefonoCelular();
        $correo=$bienHechor->getCorreo();
        $fechaNacimiento=$bienHechor->getFechaNacimiento();
        $nicho=$bienHechor->getNicho();
        

        DBClass::query("INSERT INTO bienhechores 
        (nombre,
        apellidoPaterno, 
        apellidoMaterno, 
        calle,
        numero,
        ciudad, 
        estado, 
        telefonoLocal, 
        telefonoCelular, 
        correo, 
        fechaNacimiento, 
        nicho)
        VALUES ("."'".$nombre."'".', '
        ."'".$apellidoPaterno."'".', '
            ."'".$apellidoMaterno."'".', '
            ."'".$calle."'".', '
            ."'".$numero."'".', '
            ."'".$ciudad."'".', '
            ."'".$estado."'".', '
            ."'".$telefonoLocal."'".', '
            ."'".$telefonoCelular."'".', '
            ."'".$correo."'".', '
            ."'".$fechaNacimiento."'".', '
            ."'".$nicho."'".")");

    }

    public static function updateBienHechor($bienHechor){

        $id=$bienHechor->getId();
        $nombre=$bienHechor->getNombre();
        $apellidoPaterno=$bienHechor->getApellidoPaterno();
        $apellidoMaterno=$bienHechor->getApellidoMaterno();
        $calle=$bienHechor->getCalle();
        $numero=$bienHechor->getNumero();
        $ciudad=$bienHechor->getCiudad();
        $estado=$bienHechor->getEstado();
        $telefonoLocal=$bienHechor->getTelefonoLocal();
        $telefonoCelular=$bienHechor->getTelefonoCelular();
        $correo=$bienHechor->getCorreo();
        $fechaNacimiento=$bienHechor->getFechaNacimiento();
        $frecuenciaDonativo=$bienHechor->getFrecuenciaDonativo();
        $nicho=$bienHechor->getNicho();

        DBClass::query("UPDATE bienhechores
        SET nombre="."'".$nombre."',
        apellidoPaterno="."'".$apellidoPaterno."',
        apellidoMaterno="."'".$apellidoMaterno."',
        calle="."'".$calle."',
        numero="."'".$numero."',
        ciudad="."'".$ciudad."',
        estado="."'".$estado."',
        telefonoLocal="."'".$telefonoLocal."',
        telefonoCelular="."'".$telefonoCelular."',
        correo="."'".$correo."',
        fechaNacimiento="."'".$fechaNacimiento."',
        nicho="."'".$nicho."'
        WHERE id=".$id
        );
    }

    public static function deleteBienHechor($id){
        DBClass::query("DELETE FROM bienhechores 
          WHERE id=".$id);
    }

}