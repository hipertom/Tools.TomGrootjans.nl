<?php 
    error_reporting(E_ALL);
    use Illuminate\Database\Capsule\Manager as Capsule;  
    require 'vendor/autoload.php';
    require 'database.php'; 
    
    $configuration = [
        'settings' => [
            'displayErrorDetails' => true,
        ],
    ];
    $c = new \Slim\Container($configuration);
    
    $app = new \Slim\App($c);

    require_once('users.php');


    $app->db = function() {   return new Capsule; };  
    
    require 'routes.php'; 
    
    $app->run();




    

?>
