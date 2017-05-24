<?php

require '../../database/ColoniaDAO.php';
require '../../beans/Colonia.php';
header("Access-Control-Allow-Origin: *");

$json = json_decode(file_get_contents("php://input"));

$colonia = new Colonia();

$colonia->setId($json->id);
$colonia->setNombre($json->nombre);
$colonia->setIdsector($json->idsector);


echo "Updating";

ColoniaDAO::updateColonia($sector);
