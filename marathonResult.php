<?php
/**
 * Created by IntelliJ IDEA.
 * User: chico_percedes
 * Date: 2016-05-18
 * Time: 7:03 PM
 */

//Holds database information
 require "databasedetails.php";

//Connects to the database
include "databaseConnection.php";

//Performs a query in the database
include "queryMarathonDB.php";

//Returns values from the database in the specified format.
include "getMarathonDB.php";

