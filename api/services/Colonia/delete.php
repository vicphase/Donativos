<?php

require '../../database/ColoniaDAO.php';
header("Access-Control-Allow-Origin: *");

$json = json_decode(file_get_contents("php://input"));

$id=$json->id;

ColoniaDAO::deleteColonia($id);
