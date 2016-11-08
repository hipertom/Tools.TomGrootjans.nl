<?php
$newData = file_get_contents("php://input");

if ($newData !== "") { // if new data is indeed a value, todo check if json
    $search = array('[', ']');
    $myFile = "data/tempworked.json";

    $oldData = file_get_contents($myFile);
    $oldData = str_replace($search, '', $oldData);

    $token = ($oldData == "" ? "" : ",");

    $output = $search[0] . $oldData . $token . $newData . $search[1];
    file_put_contents($myFile, $output);
} else {
    die("This is a Json saver, GTFO!");
}
?>
