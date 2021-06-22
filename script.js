let audio = document.querySelector('audio');
let img = document.querySelector('img');
let progress_bar = document.querySelector('.progress_bar');
let song_title = document.querySelector(".song_title");
let play = document.getElementById("play");
let next_song = document.getElementById("forword");
let prev_song = document.getElementById("backword");

// const Song_collection = new _musicPlayer();

const _songList = [
    {
        songTitle: "Ohe Ki Korile Bolo",
        songTrack: "Ohe Ki Korile Bolo",
        pic: "Ohe Ki Korile Bolo",
        singer: "No Man"
    },
    {
        songTitle: "Oviman",
        songTrack: "Oviman",
        pic: "Oviman",
        singer: "Tanveer Evan"
    },
    {
        songTitle: "Oviman",
        songTrack: "Tumi Bujhoni Ami Bolini",
        pic: "Tumi Bujhoni Ami Bolini",
        singer: "Tanveer Evan"
    }
]

let isPlaying = false;
//play music;
const playMusic = ()=>{
    isPlaying = true;
    audio.play();
    play.innerHTML='<i class="fa fa-pause" aria-hidden="true"></i>'
    console.log('play_song');
}
//pause music
const pauseMusic = ()=>{
    isPlaying = false;
    play.innerHTML='<i class="fa fa-play" aria-hidden="true"></i>'
    audio.pause();
    console.log('pause_song');
}
//play or pause music for one click
play.addEventListener('click',()=>{
    isPlaying ? pauseMusic() : playMusic();
})

const songCollection = (_songList)=>{
    song_title.textContent = _songList.songTitle;
    audio.src = "./assets/music/"+_songList.songTrack+".mp3";
    img.src = "./assets/img/"+_songList.pic+".jpg";
}

let songIndex = 0;
next_song.addEventListener("click",()=>{
    songIndex = (songIndex + 1) % _songList.length;
    songCollection(_songList[songIndex]);
    playMusic();
});

prev_song.addEventListener("click",()=>{
    songIndex = (songIndex - 1 + _songList.length) % _songList.length;
    songCollection(_songList[songIndex]);
    playMusic();
})