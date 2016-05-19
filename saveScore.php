<?php
/**
 * Created by IntelliJ IDEA.
 * User: chico_percedes
 * Date: 2016-05-18
 * Time: 11:21 PM
 *
 *
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

    $records = $databaseConnection->prepare("INSERT INTO `logicolorscores`(`score_id`, `user_id`, `scores`, `time`) 
    VALUES ('', :user_id, :scores, '')");
    //$records->bindParam('', $userid);
    //$records->bindParam(':fname', $fname);
    $records->bindParam(':user_id', $_SESSION['user_id']);
    $records->bindParam(':scores', $scoreDB);
    $records->execute();
}

