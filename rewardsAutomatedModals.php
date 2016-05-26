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

$reward1 = $databaseConnection->prepare("SELECT * FROM `logicolorusers` WHERE `user_id` = :user_id AND `first_login` = curdate()");
$reward1->bindParam('user_id', $_SESSION['user_id']);
$reward1->execute();
$count1 = $reward1->rowCount();
$row1 = $reward1->fetch(PDO::FETCH_ASSOC);

//echo ($count1);
//Below, the condition is that if only 1 row is returned with the current date then the magical modal
//will be triggered. If nothing is returned or multiple lines are returned then nothing will be triggered.

if ($count1 == 1){
    echo "
<!-- Modal #1 It will automatically open and close when user earns it-->
<div id=\"rewardModal1\" class=\"modal fade\" role=\"dialog\">
    <div class=\"modal-dialog\">

        <!-- Modal content-->
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <div class=\"row\">
                    <div class=\"col-xs-8\"></div>
                    <div class=\"col-xs-4\">
                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>
                    </div>

                </div>
                <div class=\"row heading\">
                    <div class=\"col-xs-12 text-center\">
                        <h2 class=\"modal-title\">You've earned an amazing reward!</h2>
                    </div>
                </div>
            </div>

            <div class=\"modal-body\">
               
                        <div class=\"row\">
                        <div class=\"col-xs-2\">
                            <img src=\"images\achieve1.png\" alt=\"Dangerous to go alone\" class=\"\">
                        </div>
                        <div class=\"col-xs-10\">
                            <h5>You just earned your first badge. Welcome to Logicolor!</h5>
                        </div>
                        </div>
           
            </div>

            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Ok</button>
            </div>

        </div>

    </div>
</div>
<!-- End of the modal -->
                        
 ";
}


$reward2 = $databaseConnection->prepare("SELECT * FROM `logicolorscores` WHERE `user_id` = :user_id");
$reward2->bindParam('user_id', $_SESSION['user_id']);
$reward2->execute();
$count2 = $reward2->rowCount();
$row2 = $reward2->fetch(PDO::FETCH_ASSOC);
/**
 * Below, two conditions must be met for a modal to be triggered. The first condition is that the above query
 * returns only one row. The second condition is that the value returned has a timestamp of today. If
 * both conditions are met, the modal will appear on the welcome screen.
 */

if ($count2 == 1){
    if(date('Y-m-d') == $row2['timestamp']){
    echo "
<!-- Modal #1 It will automatically open and close when user earns it-->
<div id=\"rewardModal2\" class=\"modal fade\" role=\"dialog\">
    <div class=\"modal-dialog\">

        <!-- Modal content-->
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <div class=\"row\">
                    <div class=\"col-xs-8\"></div>
                    <div class=\"col-xs-4\">
                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>
                    </div>

                </div>
                <div class=\"row heading\">
                    <div class=\"col-xs-12 text-center\">
                        <h2 class=\"modal-title\">You've earned an amazing reward!</h2>
                    </div>
                </div>
            </div>

            <div class=\"modal-body\">
         
                        <div class=\"row\">
                        <div class=\"col-xs-2\">
                            <img src=\"images\achieve2.png\" alt=\"Dangerous to go alone\" class=\"\">
                        </div>
                        <div class=\"col-xs-10\">
                            <h5>You've played your first game. Awesome start!</h5>
                        </div>
                        </div>
               
            </div>

            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Ok</button>
            </div>

        </div>

    </div>
</div>
<!-- End of the modal -->
 ";
}}

$reward3 = $databaseConnection->prepare("SELECT * FROM `logicolorscores` WHERE `user_id` = :user_id AND `scores` > 3000");
$reward3->bindParam('user_id', $_SESSION['user_id']);
$reward3->execute();
$count3 = $reward3->rowCount();
$row3 = $reward3->fetch(PDO::FETCH_ASSOC);

/**
 * Below, two conditions must be met for a modal to be triggered. The first condition is that the above query
 * returns only one row. The second condition is that the value returned has a timestamp of today. If
 * both conditions are met, the modal will appear on the welcome screen.
 */

if ($count3 == 1){
    if (date('Y-m-d') == $row3['timestamp']){
    echo "
<!-- Modal #1 It will automatically open and close when user earns it-->
<div id=\"rewardModal3\" class=\"modal fade\" role=\"dialog\">
    <div class=\"modal-dialog\">

        <!-- Modal content-->
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <div class=\"row\">
                    <div class=\"col-xs-8\"></div>
                    <div class=\"col-xs-4\">
                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>
                    </div>

                </div>
                <div class=\"row heading\">
                    <div class=\"col-xs-12 text-center\">
                        <h2 class=\"modal-title\">You've earned an amazing reward!</h2>
                    </div>
                </div>
            </div>

            <div class=\"modal-body\">
            
                        <div class=\"row\">
                        <div class=\"col-xs-2\">
                            <img src=\"images\achieve3.png\" alt=\"Dangerous to go alone\" class=\"\">
                        </div>
                        <div class=\"col-xs-10\">
                            <h5>Over 3000 points. You're certainly a pro!</h5>
                        </div>
                        </div>
               
            </div>

            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Ok</button>
            </div>

        </div>

    </div>
</div>
<!-- End of the modal -->
 ";
}}
