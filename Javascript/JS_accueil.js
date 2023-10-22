let Jouer = false;

function jouerAudio() {
    let son = new Audio('audio/gumball_intro.mp3');
    if (Jouer == false) {
        son.loop = true;
        son.play();
        Jouer = true;
    }
}

function showButtons() {
    jouerAudio(); // Call jouerAudio() inside this function
    document.getElementById('startText').style.display = 'none';
    var buttons = document.getElementsByClassName('hidden');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.display = 'block';
    }
}
