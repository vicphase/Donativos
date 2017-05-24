<?php
/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/12/2017
 * Time: 7:06 PM
 */

require '../../database/BienHechoresDAO.php';

header('Content-type: application/json');
echo ")]}'\n";

$json = json_decode(file_get_contents("php://input"));

$bienHechor = BienHechoresDAO::getBienHechor($json);

echo json_encode($bienHechor);
