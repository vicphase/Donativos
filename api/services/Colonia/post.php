<?php

require '../../database/ColoniaDAO.php';
require '../../beans/Colonia.php';
header("Access-Control-Allow-Origin: *");

$json = json_decode(file_get_contents("php://input"));

$colonia = new Colonia();

$colonia->setNombre($json->nombre);
$colonia->setIdsector($json->idsector);

ColoniaDAO::postColonia($colonia);
