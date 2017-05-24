<?php
/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/8/2017
 * Time: 9:32 AM
 */

require '../../database/SectorDAO.php';

$json = json_decode(file_get_contents("php://input"));

$id=$json->id;

SectorDAO::deleteSector($id);
