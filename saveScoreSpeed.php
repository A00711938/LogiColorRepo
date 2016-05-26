<?php
/**
 * Created by IntelliJ IDEA.
 * User: chico_percedes
 * Date: 2016-05-26
 * Time: 9:36 AM
 */
session_start();

//Access to DB details
require 'databasedetails.php';

//Makes a connection with the database
include 'databaseConnection.php';

//Through AJAX, the variable scoreDB is passed from JS (marathon.html) to this
//php file. When PHP recognizes the variable, a query to insert the variable into
//the database is trigerred. Note that the information will be entered only if
//the user has logged in to their respective account. Session variables are used for
//this purpose.
if (isset($_POST['scoreDB'])){
    $scoreDB = trim($_POST['scoreDB']);
    //echo ($smt);

    $records = $databaseConnection->prepare("INSERT INTO `logicolorscores`(`score_id`, `user_id`, `scores`, `speedscore`, `timestamp`) 
    VALUES ('', :user_id, '', :speedscore, now())");
    //$records->bindParam('', $userid);
    //$records->bindParam(':fname', $fname);
    $records->bindParam(':user_id', $_SESSION['user_id']);
    $records->bindParam(':speedscore', $scoreDB);
    $records->execute();
}