<?php
/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/12/2017
 * Time: 7:06 PM
 */

require '../../database/ColaboradorDAO.php';

header('Content-type: application/json');
echo ")]}'\n";

$json = json_decode(file_get_contents("php://input"));

$colaborador = BienHechoresDAO::getColaborador($json);

echo json_encode($colaborador);
