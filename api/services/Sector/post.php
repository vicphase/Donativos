<?php
/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/8/2017
 * Time: 9:32 AM
 */

require '../../database/SectorDAO.php';
require '../../beans/Sector.php';

$json = json_decode(file_get_contents("php://input"));

$sector = new Sector();

$sector->setNombre($json->nombre);
$sector->setIdZona($json->idZona);

SectorDAO::postSector($sector);
