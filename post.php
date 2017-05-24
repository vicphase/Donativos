<?php


require '../../database/ZonaDAO.php';
require '../../beans/Zona.php';

$json = json_decode(file_get_contents("php://input"));

$zona = new Zona();

$zona->setNombre($json->nombre);
$zona->setIdsector($json->idsector);


ZonaDAO::postZona($zona);
