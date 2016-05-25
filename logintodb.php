<?php
/**
 * Created by IntelliJ IDEA.
 * User: chico_percedes
 * Date: 2016-05-11
 * Time: 5:19 PM
 * 
 * The following file has been developed so that the users log in
 * using their emails and passwords. Note that if a user doesn't
 * have an account, the user must use the sign in form that connects
 * to the game's main screen.
 * 
 */
session_start();

//DB configuration Constants. So this info is required for connection.
require 'databasedetails.php';

//PDO Database Connection. Simply put, it connects to DB
include 'databaseConnection.php';

//Below all we are saying is:
//If any info is passed through post. catch them and save
//them as variable $email and var $password
if(isset($_POST['submit'])){
    $errMsg = '';
    //catches username and password sent from Form
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    //echo '$email';
    //echo '$password';

    //The next three if's search for any errors. If anything is wrong (info don't match)
    //The very last part of the code is run.
    if($email == '')
        $errMsg .= 'You must enter your Username<br>';

    if($password == '')
        $errMsg .= 'You must enter your Password<br>';

    //In here basically we say: If no errors above, then:
    // 1.- Create array var $records with the first DB query
    //         NOTE: first DB query is to bring everything that matches the email entered.
    if($errMsg == ''){
        $records = $databaseConnection->prepare('SELECT * FROM logicolorusers WHERE email = :email');
        $records->bindParam(':email', $email);
        $records->execute();
        $results = $records->fetch(PDO::FETCH_ASSOC);
        //echo $results['email'];
        //echo $results['password'];

        //Next step is. Hey PHP, did the above query brought any results?
        //If the $results > 0 and the password of the result matches the password
        //entered, then grab all the variables from that particular DB line.
        //Remember that each DB line has user_id, email, username, first (firstname), and password info.
        if(count($results) > 0 && ($results['password'] == $password)){
            $_SESSION['email'] = $results['email'];
            $_SESSION['username'] = $results['username'];
            $_SESSION['first'] = $results['first'];
            $_SESSION['user_id'] = $results['user_id'];
            $_SESSION['password'] = $results['password'];
            //The items below update the users login timestamp
            $updateLoginTimestamp = $databaseConnection->prepare('UPDATE `logicolorusers` SET `last_login` = now() WHERE `user_id` = :user_id');
            $updateLoginTimestamp->bindParam(':user_id', $_SESSION['user_id']);
            $updateLoginTimestamp->execute();


            //below we pretty much tell the system with PHP that after all the successful
            //changes above, refresh the screen with a confirmation message that says 
            //"Successfully Logged in and reroute the user to Welcome Screen TakitoDesign.html.
            header('refresh:2; url=welcomeScreenTakitoDesign.php');
            echo "Succesfully logged in";
            exit;
        }else{
            $errMsg .= 'Username and Password are not found<br>';

        }
    }
    
    //If you cannot log in because anything is wrong, a message appears and you;ll be
    //redirected to the loginpage.
    header('refresh:2; url=loginTakitoDesign.php');
    echo "Something went wrong. Please try again";
    exit;
}