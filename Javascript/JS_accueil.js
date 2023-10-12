let Jouer=false;
function jouerAudio() {
    let son = new Audio('audio/gumball_intro.mp3');
    if (Jouer==false){
        son.loop=true;
        son.play();    
        Jouer=true;
    }

}
