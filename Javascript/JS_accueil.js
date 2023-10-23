let Jouer = false;

function jouerAudio() {
    let son = new Audio('audio/gumball_intro.mp3');
    if (Jouer == false) {
        son.loop = true;
        son.play();
        Jouer = true;
    }
}

function NewGame() {
    localStorage.removeItem("Pseudo");
    localStorage.removeItem("Description");
    localStorage.removeItem("Courriel");
    localStorage.removeItem("Personnage");
    localStorage.removeItem("Objet");
}

function showButtons() {
    jouerAudio(); // Call jouerAudio() inside this function
    document.getElementById('startText').style.display = 'none';
    var buttons = document.getElementsByClassName('hidden');
    for (var i = 0; i < buttons.length; i++) {
        buttons[0].style.display = 'block';

    if (localStorage.getItem("Pseudo")!=null&&localStorage.getItem("Description")!=null&&localStorage.getItem("Courriel")&&null||localStorage.getItem("Personnage")&&null||localStorage.getItem("Objet")!=null)
        buttons[1].style.display = 'block';
}
}
