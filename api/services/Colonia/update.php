<?php

require '../../database/ColoniaDAO.php';
require '../../beans/Colonia.php';

$json = json_decode(file_get_contents("php://input"));

$colonia = new Colonia();

$colonia->setId($json->id);
$colonia->setNombre($json->nombre);
$colonia->setIdSector($json->idSector);



ColoniaDAO::updateColonia($colonia);
