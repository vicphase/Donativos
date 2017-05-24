<?php


require '../../database/ColoniaDAO.php';

header('Content-type: application/json');
echo ")]}'\n";

$colonia = ColoniaDAO::getColonias();

echo json_encode($colonia);
