<?php
/**
 * Created by IntelliJ IDEA.
 * User: chico_percedes
 * Date: 2016-05-24
 * Time: 8:06 PM
 */

session_start();

require 'databasedetails.php';

include "databaseConnection.php";

$reward1 = $databaseConnection->prepare("SELECT * FROM `logicolorusers` WHERE `user_id` = :user_id");
$reward1->bindParam('user_id', $_SESSION['user_id']);
$reward1->execute();
$row1 = $reward1->fetch(PDO::FETCH_ASSOC);

if ($row1 > 0){
 echo "
                         <!-- Reward #1 -->
                        <div class=\"row\">
                        <div class=\"col-xs-2\">
                            <img src=\"images\achieve1.png\" alt=\"Dangerous to go alone\" class=\"\">
                        </div>
                        <div class=\"col-xs-10\">
                            <h5>You just earned your first badge. Welcome to Logicolor!</h5>
                        </div>
                        </div>
                        
 ";   
}

$reward2 = $databaseConnection->prepare("SELECT * FROM `logicolorscores` WHERE `user_id` = :user_id");
$reward2->bindParam('user_id', $_SESSION['user_id']);
$reward2->execute();
$row2 = $reward2->fetch(PDO::FETCH_ASSOC);

if ($row2 > 0){
 echo "
                         <!-- Reward #2 -->
                        <div class=\"row\">
                        <div class=\"col-xs-2\">
                            <img src=\"images\achieve2.png\" alt=\"Dangerous to go alone\" class=\"\">
                        </div>
                        <div class=\"col-xs-10\">
                            <h5>You've played your first game. Awesome start!</h5>
                        </div>
                        </div>
 ";
}

$reward3 = $databaseConnection->prepare("SELECT * FROM `logicolorscores` WHERE `user_id` = :user_id AND `scores` > 3000");
$reward3->bindParam('user_id', $_SESSION['user_id']);
$reward3->execute();
$row3 = $reward3->fetch(PDO::FETCH_ASSOC);

if ($row3 > 0){
 echo "
                        <!-- Reward #3 -->
                        <div class=\"row\">
                        <div class=\"col-xs-2\">
                            <img src=\"images\achieve3.png\" alt=\"Dangerous to go alone\" class=\"\">
                        </div>
                        <div class=\"col-xs-10\">
                            <h5>Over 3000 points. You're certainly a pro!</h5>
                        </div>
                        </div>
 ";
}