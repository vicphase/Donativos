<?php

require '../../database/AportacionDAO.php';

header('Content-type: application/json');
echo ")]}'\n";

$json = json_decode(file_get_contents("php://input"));

$aportacion = AportacionDAO::getAportacion($json);

echo json_encode($aportacion);
