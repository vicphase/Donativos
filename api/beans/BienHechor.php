<?php

/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/7/2017
 * Time: 2:17 PM
 */
class BienHechor
{

    public $id;
    public $nombre;
    public $apellidoPaterno;
    public $apellidoMaterno;
    public $direccion;
    public $ciudad;
    public $estado;
    public $telefonoLocal;
    public $telefonoCelular;
    public $correo;
    public $fechaNacimiento;
    public $frecuenciaDonativo;
    public $metodoAportacion;
    public $zona;
    public $sector;

    /**
     * BienHechor constructor.
     */
    public function __construct()
    {
    }

    /**
     * @return mixed
     */
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
    public function getDireccion()
    {
        return $this->direccion;
    }

    /**
     * @param mixed $direccion
     */
    public function setDireccion($direccion)
    {
        $this->direccion = $direccion;
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
    public function getFechaNacimiento()
    {
        return $this->fechaNacimiento;
    }

    /**
     * @param mixed $fechaNacimiento
     */
    public function setFechaNacimiento($fechaNacimiento)
    {
        $this->fechaNacimiento = $fechaNacimiento;
    }

    /**
     * @return mixed
     */
    public function getFrecuenciaDonativo()
    {
        return $this->frecuenciaDonativo;
    }

    /**
     * @param mixed $frecuenciaDonativo
     */
    public function setFrecuenciaDonativo($frecuenciaDonativo)
    {
        $this->frecuenciaDonativo = $frecuenciaDonativo;
    }

    /**
     * @return mixed
     */
    public function getMetodoAportacion()
    {
        return $this->metodoAportacion;
    }

    /**
     * @param mixed $metodoAportacion
     */
    public function setMetodoAportacion($metodoAportacion)
    {
        $this->metodoAportacion = $metodoAportacion;
    }
    
    
    /**
     * @return mixed
     */
    public function getZona()
    {
        return $this->zona;
    }

    /**
     * @param mixed $zona
     */
    public function setZona($zona)
    {
        $this->zona = $zona;
    }

    /**
     * @return mixed
     */
    public function getSector()
    {
        return $this->sector;
    }

    /**
     * @param mixed $sector
     */
    public function setSector($sector)
    {
        $this->sector = $sector;
    }

    
    
}