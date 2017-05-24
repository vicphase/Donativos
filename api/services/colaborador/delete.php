<?php

require '../../database/ColaboradorDAO.php';

$json = json_decode(file_get_contents("php://input"));

$id=$json->id;

ColaboradorDAO::deleteColaborador($id);
