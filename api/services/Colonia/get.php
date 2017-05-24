<?php

require '../../database/ColoniaDAO.php';


header('Content-type: application/json');
echo ")]}'\n";

$json = json_decode(file_get_contents("php://input"));

$colonia = ColoniaDAO::getColonia($json);

echo json_encode($colonia);
