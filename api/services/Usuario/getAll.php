<?php
/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/7/2017
 * Time: 2:28 PM
 */


require '../../database/UsuarioDAO.php';

header('Content-type: application/json');
echo ")]}'\n";

$usuarios = UsuarioDAO::getUsuario();

echo json_encode($usuarios);
