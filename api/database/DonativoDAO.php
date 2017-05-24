<?php
/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 5/24/2017
 * Time: 9:48 AM
 */

require('DBClass.php');

class DonativoDAO
{

    public static function getDonativos()
    {
        $donativo = array();

        $db_aportaciones = DBClass::query('SELECT * FROM donativo');

        $n = mysqli_num_rows($db_aportaciones);

        for ($i = 0; $i < $n; $i++) {
            $tupla = mysqli_fetch_array($db_aportaciones, MYSQLI_ASSOC);
            array_push($donativo, $tupla);
        }
        return $donativo;
    }

    public static function getDonativo($id){

        $db_donativo = DBClass::query('SELECT * FROM donativo WHERE id='.$id);
        $donativo = mysqli_fetch_array($db_donativo, MYSQLI_ASSOC);
        return $donativo;

    }

    public static function postDonativo(Donativo $donativo)
    {

        $fecha=$donativo->getFecha();
        $concepto=$donativo->getConcepto();
        $monto=$donativo->getMonto();
        $folioRecibo=$donativo->getFoliorecibo();
        $referencia=$donativo->getReferencia();
        $idBienhechor=$donativo->getIdbienhechor();
        $idColaborador=$donativo->getIdcolaborador();
        


        DBClass::query("INSERT INTO donativo 
        (fecha,
        concepto, 
        monto,
        folioRecibo,
        referencia,
        idBienhechor,
        idColaborador)
        VALUES ("."'".$fecha."'".', '
            ."'".$concepto."'".', '
            ."'".$monto."'".', '
            ."'".$folioRecibo."'".', '
            ."'".$referencia."'".', '
            ."'".$idBienhechor."'".', '
            ."'".$idColaborador."'".")");

    }

    public static function updateDonativo(Donativo $donativo){

        $id=$donativo->getId();
        $fecha=$donativo->getFecha();
        $concepto=$donativo->getConcepto();
        $monto=$donativo->getMonto();
        $folioRecibo=$donativo->getFoliorecibo();
        $referencia=$donativo->getReferencia();
        $idBienhechor=$donativo->getIdbienhechor();
        $idColaborador=$donativo->getIdcolaborador();

        DBClass::query("UPDATE donativo
        SET fecha="."'".$fecha."',
        concepto="."'".$concepto."',
        monto="."'".$monto."',
        folioRecibo="."'".$folioRecibo."',
        referencia="."'".$referencia."',
        idBienhechor="."'".$idBienhechor."',
        idColaborador="."'".$idColaborador."'
        WHERE id=".$id
        );
    }

    public static function deleteDonativo($id){
        DBClass::query("DELETE FROM donativo 
          WHERE id=".$id);
    }

}