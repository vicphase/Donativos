<?php
/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/8/2017
 * Time: 9:32 AM
 */

require '../../database/UsuarioDAO.php';
require '../../beans/Usuario.php';

$json = json_decode(file_get_contents("php://input"));

$usuario = new Usuario();

$usuario->setId($json->id);
$usuario->setUsername($json->username);
$password->setPassword($json->password);


UsuarioDAO::postUsuario($usuario);
