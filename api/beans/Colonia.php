<?php

/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/7/2017
 * Time: 2:17 PM
 */
class Colonia
{

    public $id;
    public $nombre;
    public $idsector;

    /**
     * Colonia constructor.
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
    
    /**
     * @return mixed
     */
    public function getIdsector()
    {
        return $this->idsector;
    }

    /**
     * @param mixed $idsector
     */
    public function setIdsector($idsector)
    {
        $this->idsector = $idsector;
    }
    