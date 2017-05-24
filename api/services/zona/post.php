<?php


require '../../database/ZonaDAO.php';
require '../../beans/Zona.php';

header("Access-Control-Allow-Origin: *");

$json = json_decode(file_get_contents("php://input"));

$zona = new Zona();

$zona->setNombre($json->nombre);
$zona->setIdSector($json->idsector);


ZonaDAO::postZona($zona);
