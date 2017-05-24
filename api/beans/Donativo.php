<?php

class Donativo
{

    public $id;
    public $fecha;
    public $concepto;
    public $monto;
    public $folioRecibo;
    public $referencia;
    public $idBienhechor;
    public $idColaborador;

    /**
     * BienHechor constructor.
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
    public function getFecha()
    {
        return $this->fecha;
    }

    /**
     * @param mixed $fecha
     */
    public function setFecha($fecha)
    {
        $this->fecha = $fecha;
    }

    /**
     * @return mixed
     */
    public function getConcepto()
    {
        return $this->concepto;
    }

    /**
     * @param mixed $concepto
     */
    public function setConcepto($concepto)
    {
        $this->concepto = $concepto;
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
    public function getFoliorecibo()
    {
        return $this->folioRecibo;
    }

    /**
     * @param mixed $folioRecibo
     */
    public function setFoliorecibo($folioRecibo)
    {
        $this->folioRecibo = $folioRecibo;
    }

    /**
     * @return mixed
     */
    public function getReferencia()
    {
        return $this->referencia;
    }

    /**
     * @param mixed $referencia
     */
    public function setReferencia($referencia)
    {
        $this->referencia = $referencia;
    }

    /**
     * @return mixed
     */
    public function getIdbienhechor()
    {
        return $this->idBienhechor;
    }

    /**
     * @param mixed $idBienhechor
     */
    public function setIdbienhechor($idBienhechor)
    {
        $this->idBienhechor = $idBienhechor;
    }

    /**
     * @return mixed
     */
    public function getIdcolaborador()
    {
        return $this->idColaborador;
    }

    /**
     * @param mixed $idColaborador
     */
    public function setIdcolaborador($idColaborador)
    {
        $this->idColaborador = $idColaborador;
    }


}