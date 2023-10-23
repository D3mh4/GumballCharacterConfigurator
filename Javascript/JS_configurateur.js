function Validation() {
    let F_NomJoueur = document.getElementById("Nom-du-joueur").value;
    let F_Description = document.getElementById("Desciption-sommaire").value;
    let F_Courriel = document.getElementById("courriel").value;
    let Radio_Personnage = document.getElementsByName("personnage");
    let F_Personnage = "";
    let Radio_Objet = document.getElementsByName("Objet");
    let F_Objet = "";

    var playerName = document.getElementById("Nom-du-joueur").value;
    localStorage.setItem("playerName", playerName);
    

    for (let i = 0; i < Radio_Personnage.length; i++) {
        if (Radio_Personnage[i].checked)
            F_Personnage = Radio_Personnage[i].value;
    }

    for (let i = 0; i < Radio_Objet.length; i++) {
        if (Radio_Objet[i].checked)
            F_Objet = Radio_Objet[i].value;
    }

    let Valide = [false, false, false, false, false];

    if (!/^[A-zÀ-ž0-9\- .!?,'"]+$/.test(F_NomJoueur)) {
        alert("Le champ Nom du joueur n'est pas valide !");
        return;
    } else {
        Valide[0] = true;
        localStorage.setItem("Pseudo", F_NomJoueur);
    }

    if (!/^[A-zÀ-ž0-9\- .!?,'"]+$/.test(F_Description)) {
        alert("Le champ desciption sommaire n'est pas valide! ");
        return;
    } else {
        Valide[1] = true;
        localStorage.setItem("Description", F_Description);
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(F_Courriel)) {
        alert("Le champ courriel n'est pas valide! ");
        return;
    } else {
        Valide[2] = true;
        localStorage.setItem("Courriel", F_Courriel);
    }

    if (F_Personnage == "") {
        alert("Choisissez un personnage !");
        return;
    } else {
        Valide[3] = true;
        localStorage.setItem("Personnage", F_Personnage);
    }

    if (F_Objet == "") {
        alert("Choisissez un objet !");
        return;
    } else {
        Valide[4] = true;
        localStorage.setItem("Objet", F_Objet);
    }

    if (Valide[0] == true && Valide[1] == true && Valide[2] == true && Valide[3] == true && Valide[4] == true) {
        window.location.href = './entree.html';
    }
}
function SelectionnerObjet() {

    var selectedObjectImage = "";

    if (document.querySelector("[name=Objet]:checked").value === "Ciseau") {
        selectedObjectImage = "Images/Ciseau.png";
    } else if (document.querySelector("[name=Objet]:checked").value === "BatonDeColle") {
        selectedObjectImage = "Images/BatonDeColle.png";
    } else if (document.querySelector("[name=Objet]:checked").value === "SacADos") {
        selectedObjectImage = "Images/SacADos.jpg";
    }

    localStorage.setItem("selectedObjectImagePath", selectedObjectImage);

}

function SelectionnerPersonnage() {
    document.getElementById("Gumball").style.opacity = 0;
    document.getElementById("Darwin").style.opacity = 0;
    document.getElementById("Anais").style.opacity = 0;
    document.getElementById("Richard").style.opacity = 0;

    var selectedCharacterImage = "";
    var mainCharacterImage = "";
    

    if (document.querySelector("[name=personnage]:checked").value === "Gumball") {
        selectedCharacterImage = "Images/Gumball_logo.png";
        mainCharacterImage = "Images/Gumball.png";
        let Gumball = new Audio('audio/Gumball_Audio.Wav');
        Gumball.play();
    } else if (document.querySelector("[name=personnage]:checked").value === "Darwin") {
        selectedCharacterImage = "Images/Darwin_logo.png";
        mainCharacterImage = "Images/Darwin.png";
        let Darwin = new Audio('audio/Darwin_Audio.Wav');
        Darwin.play();
    } else if (document.querySelector("[name=personnage]:checked").value === "Anais") {
        selectedCharacterImage = "Images/Anais_logo.png";
        mainCharacterImage = "Images/Anais.png";
        let Anais = new Audio('audio/Anais_Audio.Wav');
        Anais.play();
        
    } else if (document.querySelector("[name=personnage]:checked").value === "Richard") {
        selectedCharacterImage = "Images/Richard_logo.png";
        mainCharacterImage = "Images/Richard.png";
        let Richard = new Audio('audio/Richard_Audio.Wav');
        Richard.play();
        
    }

    localStorage.setItem("selectedCharacterImagePath", selectedCharacterImage);
    localStorage.setItem("mainCharacterImagePath", mainCharacterImage);

    let Radio_Personnage = document.getElementsByName("personnage");
    for (let i = 0; i < Radio_Personnage.length; i++) {
        if (Radio_Personnage[i].checked) {
            switch (i) {
                case 0:
                    document.getElementById("Gumball").style.opacity = 1;
                    break;
                case 1:
                    document.getElementById("Darwin").style.opacity = 1;
                    break;
                case 2:
                    document.getElementById("Anais").style.opacity = 1;
                    break;
                case 3:
                    document.getElementById("Richard").style.opacity = 1;
                    break;
            }
        }
    }
}
