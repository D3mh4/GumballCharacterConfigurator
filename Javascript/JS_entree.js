window.onload = function() {
    let characterName = localStorage.getItem("Pseudo");
    let characterSummary = localStorage.getItem("Description");
    let characterEmail = localStorage.getItem("Courriel");

    document.querySelector(".character_name").innerText = characterName;
    document.querySelector(".character_summary").innerText = characterSummary;
    document.querySelector(".email").innerText = characterEmail;

 // Retrieving the image path from localStorage
 let characterImagePath = localStorage.getItem("selectedCharacterImagePath");
 if (characterImagePath) {
     document.querySelector("[alt='Character_Selected']").src = characterImagePath;
 }
}
