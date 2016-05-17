<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Log in Takito Design Page</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
<!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    <!-- [endif]-->
</head>
<body>
<!--
Below I add all the content required for Boostrap to create the log-in page.
-->
<div class="container">
    <div class="row">
        <div class="col-xs-12 text-center">
            <!--
            <a href="loginTakitoDesign.html">
            REMOVING THIS REF TEMPORARILY TO CHECK IF I CAN CENTER THE LOGICOLOR IMAGE with
            Bootstrap. It worked so maybe we'll talk and confirm if the ref to the main screen is
            necessary :)

            P.S. I personally love this image as our logo. So I'd like to keep it.
            -->
            <img class="" src="images/logo.jpg" alt="logicolor" width="300px" height="80px">
            <!--
            </a>
            -->
        </div>
    </div>

    <div class="jumbotron">
        <div class="row">
            <div class="col-xs-12">
                    <h3 class="text-success text-center">
                        Welcome back!
                    </h3>
            </div>
            <div class="col-xs-12">
                <form class="form" role="form" action="logintodb.php" method="post">
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="hola@email.com">
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" name="password">
                    </div>
                    <div class="checkbox text-center">
                        <!--
                        NOTE: The remember me function is not working yet. We need to get that information
                        working sometime in week 4. I won't add this until beg. of week 4 scrum :O
                        -->
                        <label><input type="checkbox"> Remember me</label>
                    </div>
                    <div class="text-center">
                        <button type="submit" name="submit" class="btn btn-default">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 text-center">
            <h6 class="text-muted">Not a member? <span class="text-primary"><u><a href="signinTakitoDesign.html">Sign in</a></u></span></h6>
        </div>
    </div>
</div>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>
<script>
    //The following manipulates the DOM so the image renders in the middle of the app
    //screen. More DOM manipulation can be added as needed. :)
    $(document).ready(function(){
        $(".container").css({
            "padding-top":"30%",
            "padding-bottom":"30%"
        });

        //The following Jquery function manipulates the pages background color so it's set to
        //black. This function can be easily replaced with a CSS file. I'll keep it here for now :p
        $("body").css({"background-color":"black"});

    });
</script>
</body>
</html>