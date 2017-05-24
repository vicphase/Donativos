<?php

require '../../database/AportacionDAO.php';

header('Content-type: application/json');
echo ")]}'\n";

$aportaciones = AportacionDAO::getAportacion();

echo json_encode($aportaciones);
