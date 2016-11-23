<?php 
    use Illuminate\Database\Capsule\Manager as Capsule;  
    require 'vendor/autoload.php'; 
    require 'database.php'; 
    //require 'corsslim.php';  
    $app = new \Slim\Slim(); 
    //$app->add(new \CorsSlim\CorsSlim());  
    $app->db = function() {   return new Capsule; };  
    require 'routes.php'; 
    $app->run();


// $newData = '[{"id":1479311555981,"day":3,"date":31,"month":7,"year":2016,"start":"09:30","end":"17:30","pauze":"true"},{"id":1479309757789,"day":3,"date":2,"month":10,"year":2016,"start":"09:30","end":"17:30","pauze":"true"},{"id":1479310684540,"day":2,"date":15,"month":10,"year":2016,"start":"09:30","end":"17:30","pauze":"true"}]';

// echo("<pre>");
// var_dump(json_decode($newData, true));

// if ($newData !== "") { // if new data is indeed a value, todo check if json
//     //$search = array('[', ']');
//     $myFile = "data/tempworked.json";

//     //$oldData = file_get_contents($myFile);
//     //$oldData = str_replace($search, '', $oldData);

//     //$token = ($oldData == "" ? "" : ",");

//     //$output = $search[0] . $oldData . $token . $newData . $search[1];
//     file_put_contents($myFile, $newData);
// } else {
//     die("GTFO!");
// }
?>
