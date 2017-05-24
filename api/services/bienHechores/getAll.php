<?php
/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/7/2017
 * Time: 2:28 PM
 */


require '../../database/BienHechoresDAO.php';

header('Content-type: application/json');
echo ")]}'\n";

$bienHechores = BienHechoresDAO::getBienHechores();

echo json_encode($bienHechores);
