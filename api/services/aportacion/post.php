<?php

require '../../database/AportacionDAO.php';
require '../../beans/Aportacion.php';

$json = json_decode(file_get_contents("php://input"));


$aportacion = new Aportacion();

$aportacion->setId($json->id);
$aportacion->setIdfrecuenciadonativo($json->idFrecuenciaDonativo);
$aportacion->setIdmetodoaportacion($json->idMetodoAportacion);
$aportacion->setIdbienhechor($json->idBienhechor);


AportacionDAO::postAportacion($aportacion);
