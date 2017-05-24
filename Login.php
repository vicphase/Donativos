<?php
$server="localhost";
$user = "root";
$pass = "";
$bd = "D00onativos";
$conexion = mysqli_connect($server, $user, $pass, $bd) or die("Error de conexión" .mysqli_connect_error());

?>



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Signin Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="Styles/bootstrap.min.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="../../assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="Login.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="../../assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <div class="container">

      <form class="form-signin" action="<?php $_SERVER['PHP_SELF']; ?>" method="POST">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" class="sr-only">Usuario</label>
        <input type="user" id="Usuario" name="Usuario" class="form-control" placeholder="Ingrese su usuario" maxlength="15" required autofocus>
        <label for="inputPassword" class="sr-only">Clave</label>
        <input type="password" id="Clave" name="Clave" class="form-control" placeholder="Ingrese su clave" maxlength="15" required>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" name="submit">Iniciar Sesión</button>
      </form>

    </div> <!-- /container -->


    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
    <div style = "font-size:16px; color: #cc0000;"><?php echo isset($error) ? utf8_decode($error) : '' ; ?></div>
  </body>
</html>




<?php
if(isset($_POST["submit"])) {
session_start();
$usuario = mysqli_real_escape_string($conexion, $_POST["Usuario"]);
$clave = mysqli_real_escape_string($conexion, $_POST["Clave"]);
$error = '';
$sha1_pass = sha1($clave);
$sql = "SELECT * FROM Usuarios WHERE username='$usuario' and password='$sha1_pass'";
$result=$conexion->query($sql);
$rows = $result->num_rows;
if($rows >0){
$row = $result->fetch_assoc();
$_SESSION["tipo_usuario"] = $row["tipo_usuario"];
$_SESSION["Usuario"]= $row["Usuario"];
$_SESSION["Clave"] = $row["Clave"];
header("location: welcome.php");
}else{
$error = "El nombre o clave son incorrectos";
}
}


?>