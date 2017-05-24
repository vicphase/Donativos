<?php


require '../../database/ColoniaDAO.php';
header("Access-Control-Allow-Origin: *");


header('Content-type: application/json');
echo ")]}'\n";

$colonia = ColoniaDAO::getColonia();

echo json_encode($colonia);
