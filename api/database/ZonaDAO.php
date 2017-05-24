<?php

require('DBClass.php');

class ZonaDAO
{

    public static function getZonas()
{
    $zona = array();

    $db_zona = DBClass::query('SELECT * FROM zona');
    $n = mysqli_num_rows($db_zona);

    for ($i = 0; $i < $n; $i++) {
        $tupla = mysqli_fetch_array($db_zona, MYSQLI_ASSOC);
        array_push($zona, $tupla);
    }
    return $zona;
}

    public static function getZona($id)
    {

        $db_zona = DBClass::query('SELECT * FROM zona WHERE id='.$id);

            $tupla = mysqli_fetch_array($db_zona, MYSQLI_ASSOC);

        return $tupla;
    }

    public static function postZona(Zona $zona)
    {

        $nombre=$zona->getNombre();
        $idLiderZona=$zona->getIdLiderZona();
        

        if(is_null($idLiderZona)){
            DBClass::query("INSERT INTO zona
        (nombre)
        VALUES ("."'".$nombre."'".")");
        }else{
            DBClass::query("INSERT INTO zona
        (nombre,
         idsector)
        VALUES ("."'".$nombre."'".', '
                ."'".$idLiderZona."'".")");
        }

    }

    public static function updateZona(Zona $zona){

        $id=$zona->getId();
        $nombre=$zona->getNombre();
        $idLiderZona=$zona->getIdLiderZona();

        if(is_null($idLiderZona)) {
            DBClass::query("UPDATE zona
        SET nombre="."'".$nombre."'
          WHERE id=".$id);
        }else{
            DBClass::query("UPDATE zona
        SET nombre="."'".$nombre."',
        idsector="."'".$idLiderZona."'
        WHERE id=".$id);
        }


    }

    public static function deleteZona($id){
        DBClass::query("DELETE FROM zona 
          WHERE id=".$id);
    }
}