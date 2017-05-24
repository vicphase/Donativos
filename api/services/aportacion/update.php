<?php

require '../../database/AportacionDAO.php';
require '../../beans/Aportacion.php';

$json = json_decode(file_get_contents("php://input"));

$aportacion = new Aportacion();

$aportacion->setId($json->id);
$aportacion->setFrecuenciaMensual($json->frecuenciaMensual);
$aportacion->setMetodoAportacion($json->metodoAportacion);
$aportacion->setMonto($json->monto);
$aportacion->setIdBienhechor($json->idBienhechor);


AportacionDAO::updateAportacion($aportacion);
