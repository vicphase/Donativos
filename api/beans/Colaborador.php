<?php

class Colaborador
{

    public $id;
    public $nombre;
    public $apellidoPaterno;
    public $apellidoMaterno;
    public $calle;
    public $numero;
    public $idColonia
    public $ciudad;
    public $estado;
    public $telefonoLocal;
    public $telefonoCelular;
    public $correo;
    public $rol;
    public $idUsuario;
    

    /**
     * Colaborador constructor.
     */
    public function __construct()
    {
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * @param mixed $nombre
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

        public function getApellidoPaterno()
    {
        return $this->apellidoPaterno;
    }
    /**
     * @param mixed $apellidoPaterno
     */
    public function setApellidoPaterno($apellidoPaterno)
    {
        $this->apellidoPaterno = $apellidoPaterno;
    }
    /**
     * @return mixed
     */
    public function getApellidoMaterno()
    {
        return $this->apellidoMaterno;
    }

    /**
     * @param mixed $apellidoMaterno
     */
    public function setApellidoMaterno($apellidoMaterno)
    {
        $this->apellidoMaterno = $apellidoMaterno;
    }

    /**
     * @return mixed
     */
    public function getCalle()
    {
        return $this->calle;
    }

    /**
     * @param mixed $calle
     */
    public function setCalle($calle)
    {
        $this->calle = $calle;
    }

    /**
     * @return mixed
     */
    public function getNumero()
    {
        return $this->numero;
    }

    /**
     * @param mixed $numero
     */
    public function setNumero($numero)
    {
        $this->numero = $numero;
    }
    
     /**
     * @return mixed
     */
    public function getIdcolonia()
    {
        return $this->idColonia;
    }

    /**
     * @param mixed $idColonia
     */
    public function setIdcolonia($idColonia)
    {
        $this->idColonia = $idColonia;
    }  
    
    /**
     * @return mixed
     */
    public function getCiudad()
    {
        return $this->ciudad;
    }

    /**
     * @param mixed $ciudad
     */
    public function setCiudad($ciudad)
    {
        $this->ciudad = $ciudad;
    }
    
    /**
     * @return mixed
     */
    public function getEstado()
    {
        return $this->estado;
    }

    /**
     * @param mixed $estado
     */
    public function setEstado($estado)
    {
        $this->estado = $estado;
    }
    /**
     * @return mixed
     */
    public function getTelefonoLocal()
    {
        return $this->telefonoLocal;
    }

    /**
     * @param mixed $telefonoLocal
     */
    public function setTelefonoLocal($telefonoLocal)
    {
        $this->telefonoLocal = $telefonoLocal;
    }

    /**
     * @return mixed
     */
    public function getTelefonoCelular()
    {
        return $this->telefonoCelular;
    }

    /**
     * @param mixed $telefonoCelular
     */
    public function setTelefonoCelular($telefonoCelular)
    {
        $this->telefonoCelular = $telefonoCelular;
    }

    /**
     * @return mixed
     */
    public function getCorreo()
    {
        return $this->correo;
    }

    /**
     * @param mixed $correo
     */
    public function setCorreo($correo)
    {
        $this->correo = $correo;
    }
    
        /**
     * @return mixed
     */
    public function getRol()
    {
        return $this->rol;
    }

    /**
     * @param mixed $rol
     */
    public function setRol($rol)
    {
        $this->rol = $rol;
    }
    
     /**
     * @return mixed
     */
    public function getIdusuario()
    {
        return $this->idUsuario;
    }

    /**
     * @param mixed $idUsuario
     */
    public function setIdusuario($idUsuario)
    {
        $this->idUsuario = $idUsuario;
    }
    