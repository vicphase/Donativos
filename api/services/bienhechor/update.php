<?php
/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/9/2017
 * Time: 4:40 PM
 */

require '../../database/BienHechoresDAO.php';
require '../../beans/BienHechor.php';

$json = json_decode(file_get_contents("php://input"));

$bienHechor = new BienHechor();

$bienHechor->setId($json->id);
$bienHechor->setNombre($json->nombre);
$bienHechor->setApellidoPaterno($json->apellidoPaterno);
$bienHechor->setApellidoMaterno($json->apellidoMaterno);
$bienHechor->setCalle($json->calle);
$bienHechor->setNumero($json->numero);
$bienHechor->setCiudad($json->ciudad);
$bienHechor->setEstado($json->estado);
$bienHechor->setTelefonoLocal($json->telefonoLocal);
$bienHechor->setTelefonoCelular($json->telefonoCelular);
$bienHechor->setCorreo($json->correo);
$bienHechor->setFechaNacimiento($json->fechaNacimiento);
$bienHechor->setNicho($json->nicho);


echo "Updating";

BienHechoresDAO::updateBienHechor($bienHechor);
