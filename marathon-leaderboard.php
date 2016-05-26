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
		
		<!--Google font-->
		<link href='https://fonts.googleapis.com/css?family=Chewy' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Permanent+Marker' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Trade+Winds' rel='stylesheet' type='text/css'>
		<!-- CSS -->
		<link rel="stylesheet" type="text/css" href="Style/stylemarathon.css">

		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
		<!-- [endif]-->
		
		<!--IMPORT GLOBAL VARIABLE FOR THE SCRIPT NEEDED BELOW-->
		<script src="Scripts/global.js"></script>
		<!--IMPORT FUNCTIONS FOR BACKGROUND MUSIC/SFX-->
		<script src="Scripts/sounds.js"></script>

		<title>Leaderboard</title>
    </head>
	<body id="body">
	<div class = "container">
		<div class="row">
			<div class="col-xs-12 text-center">
	<!--
	Our main logo
	-->
				<img class="" src="images/logo.gif" alt="logicolor" width="300px" height="80px">

			</div>
			<div class="col-xs-12 text-center">
				<h2>Leaderboard</h2>
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
		
		<div class="row text-center">
			<button type="button" class="btn btn-lg" id="marathon">MARATHON</button>
			<button type="button" class="btn btn-lg" id="speedrun">SPEED RUN</button>
		</div>
		<br/>
		<!--
		The span below is necessary so that the results of the DB query are delivered inside. The results
		depend on whether the user clicks the marathon button or the speed run button.
		-->
		<span id="resultQuery"></span>
		<br/>
		<!-- Back button to go back to the welcome screen -->
		<div class="row text-center backbtn">
		<a href="welcomeScreenTakitoDesign.php"><button type="button" class="btn btn-lg" id="back">Back</button></a>
		</div>
	</div>


	<script>
		//The following manipulates the DOM so the background music starts:
		$(document).ready(function(){
            musicVol = 0.2;
			playMusic(this,'Sound/scoresmusic.mp3');

		//Even thought it looks like a duplicated piece of code, Well... this is not a duplicated piece of code. By having
		//the function below, the first DB that shows (by default) is the marathon
		//database. AJAX

				$.get(
					"marathonResult.php",
					{},
					function (data){
						$("#resultQuery").html(data);
					}
				)
				event.preventDefault();


		//The function below indicates the system to call the marathon database without the need
		//to refresh the page. If anything changes in the database, the results will be updated on
		//screen as soon as the user clicks on the button. AJAX
			$("#marathon").click(function(event){
				$.get(
					"marathonResult.php",
					{},
					function (data){
						$("#resultQuery").html(data);
					}
				)
				event.preventDefault();
			});

		//The function below indicates the system to call the speedrun database without the need
		//to refresh the page. If anything changes in the database, the results will be updated on
		//screen as soon as the user clicks on the button.
			$("#speedrun").click(function(event){
				$.get(
					"speedrunResult.php",
					{},
					function (data){
						$("#resultQuery").html(data);
					}
				)
				event.preventDefault();
			});
		});
	</script>
	</body>
</html>
>>>>>>> master
