<?php
/**
 * Created by IntelliJ IDEA.
 * User: chico_percedes
 * Date: 2016-05-26
 * Time: 11:29 AM
 */
require 'databasedetails.php';

include 'databaseConnection.php';

$itemsReturned = $databaseConnection->prepare("SELECT COUNT(*) as total FROM logicolorscores WHERE `scores` = 0 AND `speedscore` = 0");
$itemsReturned->execute();
$countItems = $itemsReturned->fetch(PDO::FETCH_ASSOC);

echo ($countItems['total'])."\n";

$deleteExtraZeros= $databaseConnection->prepare("DELETE FROM `logicolorscores` WHERE `scores` = 0 AND `speedscore` = 0");
$deleteExtraZeros->execute();