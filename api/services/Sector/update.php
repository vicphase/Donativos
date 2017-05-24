<?php
/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/9/2017
 * Time: 4:40 PM
 */

require '../../database/SectorDAO.php';
require '../../beans/Sector.php';

$json = json_decode(file_get_contents("php://input"));

$sector = new Sector();

$sector->setId($json->id);
$sector->setNombre($json->nombre);
$sector->setIdZona($json->idZona);

SectorDAO::updateSector($sector);
