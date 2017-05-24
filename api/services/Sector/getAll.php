<?php
/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/7/2017
 * Time: 2:28 PM
 */


require '../../database/SectorDAO.php';
header("Access-Control-Allow-Origin: *");


header('Content-type: application/json');
echo ")]}'\n";


$sector = SectorDAO::getSectores();

echo json_encode($sector);
