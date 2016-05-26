var musEl,musFile;
var randSong = Math.floor(Math.random() * 22);

function playSound(el,soundfile) {
    if (el.mp3) {
        el.mp3.currentTime = 0;
        el.mp3.volume = sfxVol;
    } else {
        el.mp3 = new Audio(soundfile);
        el.mp3.volume = sfxVol;
        el.mp3.play();
    }
}

function playMusic(el,soundfile) {
    musEl = el;
    musFile = soundfile;
    if (!el.mp3)
        el.mp3 = new Audio(soundfile);
    el.mp3.addEventListener('ended', function() {
        this.currentTime = 0;
        el.mp3.volume = musicVol;
        this.play();
    }, false);
    el.mp3.volume = musicVol;
    el.mp3.play();
}

function musicChange(value) {
	document.getElementById('musicVal').innerHTML = value;
    document.getElementById('musicslider').value = value;
    musicVol = value/10;
    playMusic(musEl,musFile);
}

function sfxChange(value) {
	document.getElementById('sfxVal').innerHTML = value;
    document.getElementById('sfxslider').value = value;
    sfxVol = value/10;
}

function randMusic() {
    randSong = 21;
    if(randSong < 7)
        playMusic(this,'Sound/marathonmusic.mp3');
    else if(randSong < 14)
        playMusic(this,'Sound/marathonmusic2.mp3');
    else if(randSong < 21)
        playMusic(this,'Sound/marathonmusic3.mp3');
    else{
        playMusic(this,'Sound/marathonmusiccreepy.mp3');
        document.getElementById('score').innerHTML = "Score: ???";
        creepy = true;
    }
}