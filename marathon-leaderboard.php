<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<!-- Deleted stylesheet temporarily for testing purposes:
		<link rel="stylesheet" type="text/css" href="Style/style.css">
-->
        <script src="Scripts/script.js"></script>

<!-- Deleted stylesheet temporarily for testing purposes:
		<link rel="stylesheet" type="text/css" href="Style/stylemarathon.css">
-->

		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
		<!-- [endif]-->

		<title>Leaderboard</title>
    </head>
<body>
<div class = "container">
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
<!--
For the table design below, I believe we should use basic bootstrap css styles as opposed to manually
changing the styles using css. In this way it'll be much easier to make the app look very streamlined
and simple.

Also, some of the future functions on the app should involve:
 a.- showing only 10 results at a time
 b.- User can swipe multiple screens to see other user's scores (max to top 40 maybe)
 b.- Fixing users scores to show all the time the user accesses the leaderboard.
-->

<br/>
<br/>
	<div class="row text-center">
		<a href="marathon-leaderboard.php"><button type="button" class="btn btn-default">MARATHON</button></a>
		<a href="speedrun-leaderboard.html"><button type="button" class="btn btn-default">SPEED RUN</button></a>
	</div>

<br/>
<br/>
			<table class="table table-hover">
				<thead>
					<tr>
						<th class="text-center">Rank</th>
						<th class="text-center">Username</th>
						<th class="text-center">Score</th>
					</tr>
				</thead>

				<tbody>
<?php
//The require function calls the file with the database details.
require 'databasedetails.php';

//In here, PHP tried to connect to the database. If so, the variable database connection save the info
//needed
try {
	$databaseConnection = new PDO('mysql:host='._HOST_NAME_.';dbname='._DATABASE_NAME_, _USER_NAME_, _DB_PASSWORD);
	$databaseConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
	echo 'ERROR: ' . $e->getMessage();
}

//In here, a query is sent to the DB. then, we request that all the info returned is saved in the
//variable $row.
        $records = $databaseConnection->prepare("SELECT * FROM logicolorscores ORDER BY scores DESC");
		$records->execute();
		$row = $records->fetch(PDO::FETCH_ASSOC);
        $rank = 1;

//The following do loop calls every row in the array $row and organizes the returned data
//in the format requested.
//Some improvements that can be done:
// 1) Cap queries to show the top 5. Maybe other items can be show sliding sideways, etc.
		do {
			$getUsername = $databaseConnection->prepare("SELECT * FROM logicolorusers WHERE user_id = :user_id");
			$getUsername->bindParam(':user_id', $row['user_id']);
			$getUsername->execute();
			$result = $getUsername->fetch(PDO::FETCH_ASSOC);
			echo "<tr><td class=\"text-center\">{$rank}</td>
				<td class=\"text-center\">{$result['username']}</td>
				<td class=\"text-center\">{$row['scores']}</td></tr>";

			$rank++;
		} while ($row = $records->fetch(PDO::FETCH_ASSOC))
?>
				</tbody>
			</table> 
</div>


<script>
	//The following manipulates the DOM so the background music starts:
	$(document).ready(function(){
        playMusic(this,'Sound/scoresmusic.mp3');
	});
</script>
</body>
</html>
