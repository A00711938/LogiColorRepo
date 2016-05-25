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
$row1 = $reward1->fetch(PDO::FETCH_ASSOC);

if ($row1 > 0){
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
                <div class=\"table-responsive\">
                    <table class=\"table\">
                        <thead>
                            <tr>
                                <th class=\"text-center\">Badge</th>
                                <th class=\"text-center\"></th>
                            </tr>
                        </thead>

                            <tr>
                                <td class=\"text-center\"><img src=\"images/pokemon/icons/6-mega-x.png\" class=\"img-responsive\"></td>
                                <td class=\"text-center\"><h5>You just earned your first badge. Welcome to Logicolor!</h5></td>
                            </tr>
                        
                    </table>
                </div>
            </div>

            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Back</button>
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
$row2 = $reward2->fetch(PDO::FETCH_ASSOC);
/**
 * I need to create a for each that counts the number of rows so that I can use them below @_@
 */

if (count($row2) < 6){
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
                <div class=\"table-responsive\">
                    <table class=\"table\">
                        <thead>
                            <tr>
                                <th class=\"text-center\">Badge</th>
                                <th class=\"text-center\"></th>
                            </tr>
                        </thead>

                            <tr>
                                <td class=\"text-center\"><img src=\"images/pokemon/icons/155.png\" class=\"img-responsive\"></td>
                                <td class=\"text-center\"><h5>You've played your first game. Awesome start!</h5></td>
                            </tr>
                        
                    </table>
                </div>
            </div>

            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Back</button>
            </div>

        </div>

    </div>
</div>
<!-- End of the modal -->
 ";
}

$reward3 = $databaseConnection->prepare("SELECT * FROM `logicolorscores` WHERE `user_id` = :user_id AND `scores` > 1000");
$reward3->bindParam('user_id', $_SESSION['user_id']);
$reward3->execute();
$row3 = $reward3->fetch(PDO::FETCH_ASSOC);

if (count($row3) != 1){
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
                <div class=\"table-responsive\">
                    <table class=\"table\">
                        <thead>
                            <tr>
                                <th class=\"text-center\">Badge</th>
                                <th class=\"text-center\"></th>
                            </tr>
                        </thead>

                            <tr>
                                <td class=\"text-center\"><img src=\"images/pokemon/icons/65-mega.png\" class=\"img-responsive\"></td>
                                <td class=\"text-center\"><h5>Over 1000 points. You're certainly a pro!</h5></td>
                            </tr>
                        
                    </table>
                </div>
            </div>

            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Back</button>
            </div>

        </div>

    </div>
</div>
<!-- End of the modal -->
 ";
}
