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

$sector = new Sector();

$sector->setId($json->id);
$sector->setNombre($json->nombre);
$sector->setIdzona($json->idzona);


echo "Updating";

SectorDAO::updateSector($sector);
