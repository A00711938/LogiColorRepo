<?php
/**
 * Created by IntelliJ IDEA.
 * User: chico_percedes
 * Date: 2016-05-18
 * Time: 4:53 PM
 */
//In here, a query is sent to the DB. then, we request that all the info returned is saved in the
//variable $row.
$records = $databaseConnection->prepare("SELECT * FROM logicolorscores ORDER BY scores DESC");
$records->execute();
$row = $records->fetch(PDO::FETCH_ASSOC);
$rank = 1;