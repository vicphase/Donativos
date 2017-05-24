<?php



require '../../database/DonativoDAO.php';

header('Content-type: application/json');
echo ")]}'\n";

$donativos = DonativoDAO::getDonativos();

echo json_encode($donativos);
