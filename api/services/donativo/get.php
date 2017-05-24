<?php


require '../../database/DonativoDAO.php';

header('Content-type: application/json');
echo ")]}'\n";

$json = json_decode(file_get_contents("php://input"));

$donativo = DonativoDAO::getDonativo($json);

echo json_encode($donativo);
