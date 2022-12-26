let canvas;
let world;
let keyboard = new Keyboard();

let instructionsIndex = 0;
let intervalIndex = [];

let click_audio = new Audio('audio/click.mp3');

function showInstructions() {
    document.getElementById('start-section').classList.add('d-none');
    document.getElementById('instructions-section').classList.remove('d-none');
    click_audio.play();
    showSlides(instructionsIndex);
    moveSlides(1);
}

function moveSlides(nextSlide) {
    showSlides(instructionsIndex += nextSlide);
    click_audio.play();
}

function showSlides(nextSlide) {
    let i;
    let slides = document.getElementsByClassName("instructions");

    if (nextSlide > slides.length) {
        instructionsIndex = 1;
    }
    if (nextSlide < 1) {
        instructionsIndex = slides.length;
    }

    if (nextSlide == slides.length) {
        document.getElementById('next-btn').classList.add('d-none');
        document.getElementById('start-game-btn').classList.remove('d-none');
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[instructionsIndex - 1].style.display = "block";
}

function startGame() {
    document.getElementById('instructions-section').classList.add('d-none');
    document.getElementById('game-section').classList.remove('d-none');
    canvas = document.getElementById('canvas');
    initLevel();
    world = new World(canvas, keyboard);
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
});

function smartphoneKeys() {
    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });

    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    document.getElementById('btnUp').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;
    });

    document.getElementById('btnUp').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.UP = false;
    });

    document.getElementById('btnDown').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.DOWN = true;
    });

    document.getElementById('btnDown').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.DOWN = false;
    });

    document.getElementById('btnAttack').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('btnAttack').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });
}

function startFullscreen() {
    let fullscreenArea = document.getElementById('game-section');
    enterFullscreen(fullscreenArea);
}

function enterFullscreen(fullscreenArea) {
    if (fullscreenArea.requestFullscreen) {
        fullscreenArea.requestFullscreen();
    } else if (fullscreenArea.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (fullscreenArea.webkitRequestFullscreen) {
        fullscreenArea.webkitRequestFullscreen();
    }
}

function exitFullscreen() {
    if (fullscreenArea.exitFullscreen) {
        fullscreenArea.exitFullscreen();
    } else if (fullscreenArea.webkitExitFullscreen) {
        fullscreenArea.webkitExitFullscreen();
    }
}

function bgMusicOff() {
    document.getElementById('bgMusic').innerHTML = `<button onclick="bgMusicOn()" class="bgMusic-btn"> <img class="bgMusic-btn-img" src="img/mute.png"></button>`;
    world.background_audio.pause();
}

function bgMusicOn() {
    document.getElementById('bgMusic').innerHTML = `<button onclick="bgMusicOff()" class="bgMusic-btn"> <img class="bgMusic-btn-img" src="img/audio-speaker.png"></button>`;
    world.background_audio.play();
}

function restartGame() {
    document.getElementById('game-over-section').classList.add('d-none');
    document.getElementById('win-game').classList.add('d-none');
    document.getElementById('lose-game').classList.add('d-none');
    startGame();
}

function setStoppableInterval(fn, interval) {
    let intervalNumber = setInterval(fn, interval);
    intervalIndex.push(intervalNumber);
}

function clearAllIntervals() {
    intervalIndex.forEach(i => clearInterval(i));
}