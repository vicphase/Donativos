<?php

require '../../database/ColaboradorDAO.php';
require '../../beans/Colaborador.php';

$json = json_decode(file_get_contents("php://input"));

$Colaborador = new Colaborador();

$Colaborador->setId($json->id);
$Colaborador->setNombre($json->nombre);
$Colaborador->setApellidoPaterno($json->apellidoPaterno);
$Colaborador->setApellidoMaterno($json->apellidoMaterno);
$Colaborador->setCalle($json->calle);
$Colaborador->setNumeroext($json->numeroext);
$Colaborador->setColonia($json->colonia);
$Colaborador->setCiudad($json->ciudad);
$Colaborador->setEstado($json->estado);
$Colaborador->setTelefonoLocal($json->telefonoLocal);
$Colaborador->setTelefonoCelular($json->telefonoCelular);
$Colaborador->setCorreo($json->correo);
$Colaborador->setFechaNacimiento($json->fechaNacimiento);
$Colaborador->setRol($json->rol);
$Colaborador->setZona($json->zona);
$Colaborador->setSector($json->sector);

ColaboradorDAO::updateColaborador($Colaborador);
