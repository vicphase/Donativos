<?php

require '../../database/AportacionDAO.php';

header('Content-type: application/json');
echo ")]}'\n";

$aportaciones = AportacionDAO::getAportaciones();

echo json_encode($aportaciones);
