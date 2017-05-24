<?php


require '../../database/ZonaDAO.php';
require '../../beans/Zona.php';

$json = json_decode(file_get_contents("php://input"));

$zona = new Zona();

$zona->setNombre($json->nombre);
if(!is_null($json->idLiderZona))
$zona->setIdLiderZona($json->idLiderZona);

ZonaDAO::postZona($zona);
