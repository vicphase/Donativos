<?php

require '../../database/AportacionDAO.php';

$json = json_decode(file_get_contents("php://input"));

$id=$json->id;

AportacionDAO::deleteAportacion($id);
