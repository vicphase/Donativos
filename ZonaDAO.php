<?php

require('DBClass.php');

class ZonaDAO
{

    public static function getZona()
    {
        $zona = array();

        $db_zona = DBClass::query('SELECT * FROM Zona');

        $n = mysqli_num_rows($db_zona);

        for ($i = 0; $i < $n; $i++) {
            $tupla = mysqli_fetch_array($db_zona, MYSQLI_ASSOC);
            array_push($zona, $tupla);
        }
        return $zona;
    }

    public static function postZona(Zona $zona)
    {

        $nombre=$zona->getNombre();
        $idsector=$zona->getIdsector();
        

        DBClass::query("INSERT INTO Zona
        (nombre,
         idsector
        VALUES ("."'".$nombre."'".', '
            ."'".$idsector."'".")");
    }

    public static function updateZona($zona){

        $nombre=$Colaborador->getNombre();
        $idsector=$zona->getIdsector();

        DBClass::query("UPDATE Zona
        SET nombre="."'".$nombre."',
        idsector="."'".$idsector."'
        WHERE id=".$id
        );
    }

    public static function deleteZona($id){
        DBClass::query("DELETE FROM Zona 
          WHERE id=".$id);
    }
}