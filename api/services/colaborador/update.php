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
$Colaborador->setNumero($json->numero);
$Colaborador->setIdcolonia($json->idColonia);
$Colaborador->setCiudad($json->ciudad);
$Colaborador->setEstado($json->estado);
$Colaborador->setTelefonoLocal($json->telefonoLocal);
$Colaborador->setTelefonoCelular($json->telefonoCelular);
$Colaborador->setCorreo($json->correo);
$Colaborador->setRol($json->rol);
$Colaborador->setIdusuario($json->idUsuario);

ColaboradorDAO::updateColaborador($Colaborador);
