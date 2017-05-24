<?php

require '../../database/DonativoDAO.php';

$json = json_decode(file_get_contents("php://input"));

$id=$json->id;

DonativoDAO::deleteDonativo($id);
