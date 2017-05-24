<?php


require('DBClass.php');

class UsuarioDAO
{

    public static function getUsuarios()
    {
        $usuarios = array();

        $db_usuarios = DBClass::query('SELECT * FROM aportacion');

        $n = mysqli_num_rows($db_usuarios);

        for ($i = 0; $i < $n; $i++) {
            $tupla = mysqli_fetch_array($db_usuarios, MYSQLI_ASSOC);
            array_push($usuarios, $tupla);
        }
        return $usuarios;
    }
    
    public static function getUsuario($usuario){
        
        $db_usuario = DBClass::query('SELECT * FROM Usuarios WHERE id='.$id);
        $usuario = mysqli_fetch_array($db_usuario, MYSQLI_ASSOC);
        return $usuario;
        
    }

    public static function postUsuario(Usuario $usuario)
    {
        $username=$usuario->getUsername();
        $password=$usuario->getPassword();


        DBClass::query("INSERT INTO Usuarios 
        (username,
        password)
        VALUES ("."'".$username."'".', '
            ."'".$password."'".")");

    }

    public static function updateUsuario(Usuario $usuario){

        $username=$usuario->getUsername();
        $password=$usuario->getPassword();

        DBClass::query("UPDATE Usuario
        SET username="."'".$username."',
        password="."'".$password."'
        WHERE id=".$id
        );
    }

    public static function deleteUsuario($id){
        DBClass::query("DELETE FROM Usuario 
          WHERE id=".$id);
    }

}