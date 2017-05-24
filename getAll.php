<?php
/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/7/2017
 * Time: 2:28 PM
 */


require '../../database/ZonaDAO.php';

header('Content-type: application/json');
echo ")]}'\n";

$zona = ZonaDAO::getZona();

echo json_encode($zona);
