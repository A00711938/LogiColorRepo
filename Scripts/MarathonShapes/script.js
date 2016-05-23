function newGame() {
    var modal = document.getElementById('gameOver');
	modal.style.display = "none";
    resetGame();
    generateColor();
}

function resetGame(){
    score = 0;
    lives = 3;
    level = 1;
    document.getElementById('message').innerHTML = "";
    document.getElementById('level').innerHTML = "Level: " + level;
    document.getElementById('score').innerHTML = "Score: " + score;
    document.getElementById('heart1').className = "glyphicon glyphicon-heart text-danger";
    document.getElementById('heart2').className = "glyphicon glyphicon-heart text-danger";
    document.getElementById('heart3').className = "glyphicon glyphicon-heart text-danger";
}