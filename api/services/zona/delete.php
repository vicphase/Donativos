<?php
/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/8/2017
 * Time: 9:32 AM
 */

require '../../database/ZonaDAO.php';

header("Access-Control-Allow-Origin: *");

$json = json_decode(file_get_contents("php://input"));

$id=$json->id;

ZonaDAO::deleteZona($id);
