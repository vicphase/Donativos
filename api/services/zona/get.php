<?php
/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/12/2017
 * Time: 7:06 PM
 */

require '../../database/Zona.php';

header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
echo ")]}'\n";

$json = json_decode(file_get_contents("php://input"));

$zona = ZonaDAO::getZona($json);

echo json_encode($zona);
