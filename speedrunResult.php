<?php
/**
 * Created by IntelliJ IDEA.
 * User: chico_percedes
 * Date: 2016-05-18
 * Time: 8:30 PM
 * 
 *The whole file has been broken down into smaller elements to make the code
 * more compact and easy to follow.
 */
//Database Details
require "databasedetails.php";

//Connects to DB
include "databaseConnection.php";

//Performs a query in the DB
include "querySpeedrunDB.php";

//Returns information from the databse
include "getSpeedRunDB.php";