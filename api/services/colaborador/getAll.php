<?php

require '../../database/ColaboradorDAO.php';

header('Content-type: application/json');
echo ")]}'\n";

$colaboradores = ColaboradorDAO::getColaboradores();

echo json_encode($colaboradores);
