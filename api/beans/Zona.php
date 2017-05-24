<?php

class Zona
{

    public $id;
    public $nombre;
    public $idLiderZona;
    

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
    
    /**
     * @return mixed 
     */
    public function getIdLiderZona()
    {
        return $this->idLiderZona;
    }

    /**
     * @param mixed $idsector
     */
    public function setIdLiderZona($idLiderZona)
    {
        $this->idLiderZona = $idLiderZona;
    }
}