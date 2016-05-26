<?php
/**
 * Created by IntelliJ IDEA.
 * User: chico_percedes
 * Date: 2016-05-11
 * Time: 6:23 PM
 * 
 * The following code ensures that the user can create an account in our database. Note that
 * some of the following are issues that may need to be addressed in the future:
 * 
 * - Avoiding duplicate users and/or emails.
 * 
 */
session_start();

//DB configuration Constants. So this info is required for connection.
require 'databasedetails.php';

//PDO Database Connection. Simply put, it connects to DB
include 'databaseConnection.php';

//Below all we are saying is:
//If any info is passed through post. catch them and save
//them as variables
if(isset($_POST['submit'])){
    $errMsg = '';
    //catches all items from form in signin page and
    //saves all the information as variables.
    $email = trim($_POST['email']);
    $username = trim($_POST['username']);
    $first = trim($_POST['first']);
    $password = trim($_POST['password']);
    $confirmpwd = trim($_POST['confirmpwd']);
    $userid = '';

    //The following checks that no information is empty. If any of the boxes
    //is empty, then an error will be triggered. Must of the in form validation
    //will be done using JS and REGEX (I have a template that I can reuse so it'll
    //be easy :p
    if($email == '')
        $errMsg .= 'You must enter your Email Address<br>';

    if($username == '')
        $errMsg .= 'You must enter your Username<br>';

    if($first == '')
        $errMsg .= 'You must enter your First Name<br>';

    if($password == '')
        $errMsg .= 'You must enter your Password<br>';

    if($password != $confirmpwd)
        $errorMsg .= 'You did not confirm your password<br>';

    //In here we say: If no erroMsg is triggered, then prepare to DB
    //for some fun info.
    if($errMsg == ''){
        $records = $databaseConnection->prepare("INSERT INTO logicolorusers (user_id, email, username, first, password, last_login, first_login)
			VALUES ('',:email,:username,:first,:password, now(), now())");
        //$records->bindParam('', $userid);	
        //$records->bindParam(':fname', $fname);			
        $records->bindParam(':email', $email);
        $records->bindParam(':username', $username);
        $records->bindParam(':first', $first);
        $records->bindParam(':password', $password);
        $records->execute();
        //$results = $records->fetch(PDO::FETCH_ASSOC);
        //echo $results['email'];
        //echo $results['password'];

        //In here I couldn't use password_verify since I couldn't figure output_add_rewrite_var
        //the hash instructions. I used regular results instead.
        //if(count($results) > 0 && ($results['password'] == $password)){
        //$_SESSION['email'] = $results['email'];
        //$_SESSION['fname'] = $results['fname'];
        //$_SESSION['lname'] = $results['lname'];


        //So if everything went smoothly, the new user will be entered in the database
        //and the user will be directed to the main screen. A message confirming the
        //successful query will appear on the screen for 2 seconds.
        header('refresh:0; url=loginTakitoDesign.php');
        echo "New account created successfully";
        echo "Please log-in using your new username and password.";
        exit;
    }else{
        $errMsg .= 'Error creating account<br>';

    }
}

//If anything wrong happens (e.g. an errMsg was triggered). The
//user will see a message saying something went wrong and the user will be
//redirected to the sign in screen.
header('refresh:0; url=signinTakitoDesign.html');
echo "Something went wrong so try again";
exit;