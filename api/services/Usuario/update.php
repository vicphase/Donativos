<?php
/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/9/2017
 * Time: 4:40 PM
 */

require '../../database/UsuarioDAO.php';
require '../../beans/Usuario.php';

$json = json_decode(file_get_contents("php://input"));

$usuario = new Usuario();

$usuario->setId($json->id);
$usuario->setUsername($json->username);
$usuario->setPassword($json->password);


UsuarioDAO::updateUsuario($usuario);
