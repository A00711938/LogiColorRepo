<?php
/**
 * Created by IntelliJ IDEA.
 * User: chico_percedes
 * Date: 2016-05-18
 * Time: 8:28 PM
 */
//In here, a query is sent to the DB. then, we request that all the info returned is saved in the
//variable $row.
$records = $databaseConnection->prepare("SELECT * FROM `logicolorscores` WHERE `speedscore` > 0 ORDER BY `logicolorscores`.`speedscore` DESC, `score_id` ASC LIMIT 10");
$records->execute();
$row = $records->fetch(PDO::FETCH_ASSOC);
$rank = 1;
