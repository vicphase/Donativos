<?php
/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/9/2017
 * Time: 4:40 PM
 */

require '../../database/ZonaDAO.php';
require '../../beans/Zona.php';


$json = json_decode(file_get_contents("php://input"));

$zona = new Zona();

$zona->setId($json->id);
$zona->setNombre($json->nombre);
if(!is_null($json->idLiderZona))
$zona->setIdLiderZona($json->idLiderZona);

ZonaDAO::updateZona($zona);
