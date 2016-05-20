function playSound(el,soundfile) {
    if (el.mp3) {
        el.mp3.pause();
        el.mp3.currentTime = 0;
        el.mp3.volume = sfxVol;
        el.mp3.play();
    } else {
        el.mp3 = new Audio(soundfile);
        el.mp3.volume = sfxVol;
        el.mp3.play();
    }
}

function playMusic(el,soundfile) {
    el.mp3 = new Audio(soundfile);
    el.mp3.addEventListener('ended', function() {
        this.currentTime = 0;
        el.mp3.volume = musicVol;
        this.play();
    }, false);
    el.mp3.volume = musicVol;
    el.mp3.play();
}

function musicChange(value){
	document.getElementById('musicVal').innerHTML = value;
    musicVol = value/10;
}

function sfxChange(value){
	document.getElementById('sfxVal').innerHTML = value;
    sfxVol = value/10;
}