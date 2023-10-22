window.onload = function() {
    let characterName = localStorage.getItem("Pseudo");
    let characterSummary = localStorage.getItem("Description");
    let characterEmail = localStorage.getItem("Courriel");

    document.querySelector(".character_name").innerText = characterName;
    document.querySelector(".character_summary").innerText = characterSummary;
    document.querySelector(".email").innerText = characterEmail;

    let playerNameFromLocalStorage = localStorage.getItem("playerName");
if (playerNameFromLocalStorage) {
    document.querySelectorAll("p").forEach(function(pElement) {
        pElement.textContent = pElement.textContent.replace("Nom du joueur", playerNameFromLocalStorage);
    });
}

 let characterImagePath = localStorage.getItem("selectedCharacterImagePath");
 if (characterImagePath) {
     document.querySelector("[alt='Character_Selected']").src = characterImagePath;
     document.querySelector("[alt='character-image']").src = characterImagePath;
 }

 let objectImagePath = localStorage.getItem("selectedObjectImagePath");
 if (objectImagePath) {
     document.querySelector("[alt='Object Icon']").src = objectImagePath;
 }
}
