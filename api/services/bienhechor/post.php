<?php
/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/8/2017
 * Time: 9:32 AM
 */

require '../../database/BienHechoresDAO.php';
require '../../beans/BienHechor.php';

$json = json_decode(file_get_contents("php://input"));

$bienHechor = new BienHechor();

$bienHechor->setNombre($json->nombre);
$bienHechor->setApellidoPaterno($json->apellidoPaterno);
$bienHechor->setApellidoMaterno($json->apellidoMaterno);
$bienHechor->setCalle($json->calle);
$bienHechor->setNumero($json->numero);
$bienHechor->setIdColonia($json->idColonia);
$bienHechor->setCiudad($json->ciudad);
$bienHechor->setEstado($json->estado);
$bienHechor->setTelefonoLocal($json->telefonoLocal);
$bienHechor->setTelefonoCelular($json->telefonoCelular);
$bienHechor->setCorreo($json->correo);
$bienHechor->setFechaNacimiento($json->fechaNacimiento);
$bienHechor->setNicho($json->nicho);


BienHechoresDAO::postBienHechor($bienHechor);
