function newGame() {
    var modal = document.getElementById('gameOver');
	modal.style.display = "none";
    resetGame();
    generateQuestion();
}

function resetGame(){
    score = 0;
    document.getElementById('score').innerHTML = "Stage Completed: " + score;
}

function playSound(el,soundfile) {
    if (el.mp3) {
        el.mp3.pause();
        el.mp3.currentTime = 0;
        el.mp3.play();
    } else {
        el.mp3 = new Audio(soundfile);
        el.mp3.play();
    }
}

function playMusic(el,soundfile) {
    el.mp3 = new Audio(soundfile);
    el.mp3.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    el.mp3.play();
}

function changeVolume(audio,percent) {
    audio.volume = percent/100;
}