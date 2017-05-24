<?php

require '../../database/DonativoDAO.php';
require '../../beans/Donativo.php';

$json = json_decode(file_get_contents("php://input"));

$donativo = new Donativo();

$donativo->setId($json->id);
$donativo->setFecha($json->fecha);
$donativo->setConcepto($json->concepto);
$donativo->setMonto($json->monto);
$donativo->setFoliorecibo($json->folioRecibo);
$donativo->setReferencia($json->referencia);
$donativo->setIdbienhechor($json->idBienhechor);
$donativo->setIdcolaborador($json->idColaborador);



echo "Updating";

DonativoDAO::updateDonativo($donativo);
