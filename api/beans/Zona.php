<?php

class Zona
{

    public $id;
    public $nombre;
    public $idSector;
    

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
    public function getIdSector()
    {
        return $this->idSector;
    }

    /**
     * @param mixed $idsector
     */
    public function setIdSector($idSector)
    {
        $this->idSector = $idSector;
    }
}