<?php

/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/7/2017
 * Time: 4:17 PM
 */

require('DBClass.php');

class ColoniaDAO
{

    public static function getColonias()
    {
        $colonias = array();

        $db_colonias = DBClass::query('SELECT * FROM colonia');

        $n = mysqli_num_rows($db_colonias);

        for ($i = 0; $i < $n; $i++) {
            $tupla = mysqli_fetch_array($db_colonias, MYSQLI_ASSOC);
            array_push($colonias, $tupla);
        }
        return $colonias;
    }
    
    public static function getColonia($id){
        
        $db_colonia = DBClass::query('SELECT * FROM colonia WHERE id='.$id);
        $colonia = mysqli_fetch_array($db_colonia, MYSQLI_ASSOC);
        return $colonia;
        
    }

    public static function postColonia(Colonia $colonia)
    {

        $nombre=$colonia->getNombre();
        $idsector=$colonia->getIdSector();
        
        
        DBClass::query("INSERT INTO colonia 
        (nombre,
        idSector)
        VALUES ("."'".$nombre."'".', '
            ."'".$idsector."'".")");

    }

    public static function updateColonia(Colonia $colonia){

        $id=$colonia->getId();
        $nombre=$colonia->getNombre();
        $idsector=$colonia->getIdSector();

        DBClass::query("UPDATE colonia
        SET nombre="."'".$nombre."',
        idSector="."'".$idsector."'
        WHERE id=".$id
        );
    }

    public static function deleteColonia($id){
        DBClass::query("DELETE FROM colonia 
          WHERE id=".$id);
    }

}