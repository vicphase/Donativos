<?php

/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 5/24/2017
 * Time: 9:09 AM
 */
class Aportacion
{

    public $id;
    public $monto;
    public $frecuenciaMensual;
    public $metodoAportacion;
    public $idBienhechor;

    /**
     * Aportacion constructor.
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
    public function getFrecuenciaMensual()
    {
        return $this->frecuenciaMensual;
    }

    /**
     * @param mixed $frecuenciaMensual
     */
    public function setFrecuenciaMensual($frecuenciaMensual)
    {
        $this->frecuenciaMensual = $frecuenciaMensual;
    }

    /**
     * @return mixed
     */
    public function getMonto()
    {
        return $this->monto;
    }

    /**
     * @param mixed $monto
     */
    public function setMonto($monto)
    {
        $this->monto = $monto;
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
    public function getIdBienhechor()
    {
        return $this->idBienhechor;
    }

    /**
     * @param mixed $idBienhechor
     */
    public function setIdBienhechor($idBienhechor)
    {
        $this->idBienhechor = $idBienhechor;
    }
    
    


}