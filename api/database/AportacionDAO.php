<?php


require('DBClass.php');

class AportacionDAO
{

    public static function getAportaciones()
    {
        $aportaciones = array();

        $db_aportaciones = DBClass::query('SELECT * FROM Aportacion');

        $n = mysqli_num_rows($db_aportaciones);

        for ($i = 0; $i < $n; $i++) {
            $tupla = mysqli_fetch_array($db_aportaciones, MYSQLI_ASSOC);
            array_push($aportaciones, $tupla);
        }
        return $aportaciones;
    }
    
    public static function getAportacion($aportacion){
        
        $db_aportacion = DBClass::query('SELECT * FROM Aportacion WHERE id='.$id);
        $aportacion = mysqli_fetch_array($db_aportacion, MYSQLI_ASSOC);
        return $aportacion;
        
    }

    public static function postAportacion(Aportacion $aportacion)
    {

        $idFrecuenciaDonativo=$aportacion->getIdfrecuenciadonativo();
        $idMetodoAportacion=$aportacion->getIdmetodoaportacion();
        $idBienhechor=$aportacion->getIdbienhechor();

        DBClass::query("INSERT INTO Aportacion 
        (idFrecuenciaDonativo,
        idMetodoAportacion, 
        idBienhechor)
        VALUES ("."'".$idFrecuenciaDonativo."'".', '
        ."'".$idMetodoAportacion."'".', '
            ."'".$idBienhechor."'".")");

    }

    public static function updateAportacion($aportacion){

        $id=$aportacion->getId();
        $idFrecuenciaDonativo=$aportacion->getIdfrecuenciadonativo();
        $idMetodoAportacion=$aportacion->getIdmetodoaportacion();
        $idBienhechor=$aportacion->getIdbienhechor();

        DBClass::query("UPDATE Aportacion
        SET idFrecuenciaDonativo="."'".$idFrecuenciaDonativo."',
        idMetodoAportacion="."'".$idMetodoAportacion."',
        idBienhechor="."'".$idBienhechor."'
        WHERE id=".$id
        );
    }

    public static function deleteAportacion($id){
        DBClass::query("DELETE FROM Aportacion 
          WHERE id=".$id);
    }

}