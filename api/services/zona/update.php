<?php
/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/9/2017
 * Time: 4:40 PM
 */

require '../../database/ZonaDAO.php';
require '../../beans/Zona.php';

header("Access-Control-Allow-Origin: *");

$json = json_decode(file_get_contents("php://input"));

$zona = new Zona();

$zona->setId($json->id);
$zona->setNombre($json->nombre);
$zona->setIdSector($json->idsector);

ZonaDAO::updateZona($zona);
