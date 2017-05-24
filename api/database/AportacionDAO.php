<?php


require('DBClass.php');

class AportacionDAO
{

    public static function getAportaciones()
    {
        $aportaciones = array();

        $db_aportaciones = DBClass::query('SELECT * FROM aportacion');

        $n = mysqli_num_rows($db_aportaciones);

        for ($i = 0; $i < $n; $i++) {
            $tupla = mysqli_fetch_array($db_aportaciones, MYSQLI_ASSOC);
            array_push($aportaciones, $tupla);
        }
        return $aportaciones;
    }
    
    public static function getAportacion($id){
        
        $db_aportacion = DBClass::query('SELECT * FROM Aportacion WHERE id='.$id);
        $aportacion = mysqli_fetch_array($db_aportacion, MYSQLI_ASSOC);
        return $aportacion;
        
    }

    public static function postAportacion(Aportacion $aportacion)
    {

        $monto=$aportacion->getMonto();
        $frecuenciaMensual=$aportacion->getFrecuenciaMensual();
        $metodoAportacion=$aportacion->getMetodoAportacion();
        $idBienhechor=$aportacion->getIdBienhechor();


        DBClass::query("INSERT INTO aportacion 
        (monto,
        frecuenciaMensual, 
        metodoAportacion,
        idBienhechor)
        VALUES ("."'".$monto."'".', '
        ."'".$frecuenciaMensual."'".', '
            ."'".$metodoAportacion."'".', '
            ."'".$idBienhechor."'".")");

    }

    public static function updateAportacion(Aportacion $aportacion){

        $id=$aportacion->getId();
        $monto=$aportacion->getMonto();
        $frecuenciaMensual=$aportacion->getFrecuenciaMensual();
        $metodoAportacion=$aportacion->getMetodoAportacion();
        $idBienhechor=$aportacion->getIdBienhechor();

        DBClass::query("UPDATE Aportacion
        SET monto="."'".$monto."',
        frecuenciaMensual="."'".$frecuenciaMensual."',
        metodoAportacion="."'".$metodoAportacion."',
        idBienhechor="."'".$idBienhechor."'
        WHERE id=".$id
        );
    }

    public static function deleteAportacion($id){
        DBClass::query("DELETE FROM Aportacion 
          WHERE id=".$id);
    }

}