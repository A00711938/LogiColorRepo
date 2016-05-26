<?php
/**
 * Created by IntelliJ IDEA.
 * User: chico_percedes
 * Date: 2016-05-26
 * Time: 11:29 AM
 */
require 'databasedetails.php';

include 'databaseConnection.php';

$itemsReturned = $databaseConnection->prepare("SELECT COUNT(*) as total FROM logicolorscores WHERE `speedscore` > 0");
$itemsReturned->execute();
$countItems = $itemsReturned->fetch(PDO::FETCH_ASSOC);
$number = 20;
$itemsToDelete = $countItems['total'] - $number;

echo ($countItems['total'])."\n".
    ($number)."\n".
    ($itemsToDelete);

$deleteExtraItems = $databaseConnection->prepare("DELETE FROM `logicolorscores` WHERE `speedscore` > 0 ORDER BY `logicolorscores`.`scores` ASC LIMIT $itemsToDelete");
$deleteExtraItems->execute();