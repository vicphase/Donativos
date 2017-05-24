<?php

/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/7/2017
 * Time: 4:17 PM
 */

require('DBClass.php');

class SectorDAO
{
    public static function getSectores()
    {
        $sectores = array();

        $db_sectores = DBClass::query('SELECT * FROM sector');

        $n = mysqli_num_rows($db_sectores);

        for ($i = 0; $i < $n; $i++) {
            $tupla = mysqli_fetch_array($db_sectores, MYSQLI_ASSOC);
            array_push($sectores, $tupla);
        }
        return $sectores;
    }
    
    public static function getSector($id){
        
        $db_sector = DBClass::query('SELECT * FROM Sector WHERE id='.$id);
        $sector = mysqli_fetch_array($db_sector, MYSQLI_ASSOC);
        return $sector;
        
    }

    public static function postSector(Sector $sector)
    {

        $nombre=$sector->getNombre();
        $idzona=$sector->getIdZona();


        DBClass::query("INSERT INTO Sector 
        (nombre,
        idZona)
        VALUES ("."'".$nombre."'".', '
            ."'".$idzona."'".")");

    }

    public static function updateSector(Sector $sector){

        $id=$sector->getId();
        $nombre=$sector->getNombre();
        $idzona=$sector->getIdZona();


        DBClass::query("UPDATE Sector
        SET nombre="."'".$nombre."',
        idZona="."'".$idzona."'
        WHERE id=".$id
        );
    }

    public static function deleteSector($id){
        DBClass::query("DELETE FROM Sector 
          WHERE id=".$id);
    }

}