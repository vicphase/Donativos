<?php

/**
 * Created by PhpStorm.
 * User: Victor
 * Date: 4/7/2017
 * Time: 4:07 PM
 */
class DBClass {

    private static $DB_CONNECTIONSTRING = 'localhost';
    private static $DB_USERNAME = 'root';
    private static $DB_PASSWORD = '';
    private static $DB_DATABASE = 'donativos';

    private static $db = null;

    protected static function connect() {
        self::$db = new mysqli(self::$DB_CONNECTIONSTRING, self::$DB_USERNAME, self::$DB_PASSWORD, self::$DB_DATABASE);
    }

    public static function execute($sql) {
        if (self::$db === null) {
            self::connect();
        }
        $statement = mysqli_query (self::$db,$sql)
        or die ("Error en la consulta:".mysql_error());
        return $statement;
    }
    
        public static function query($sql) {
         return self::execute($sql);
    }

}