//variablen aanmaken
let info = document.querySelector('#alleMatches');
let btn = document.querySelector('#knop');

//functie om informatie van een match te verbergen
function infoVerbergen() {
    info.classList.toggle("visible");
    console.log("testen");
};

//Bron MDN. (2020a, 6 mei). Element.getBoundingClientRect(). Geraadpleegd van https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
//Functie om de matches in het scherm te laden faden zodra je op een bepaald gedeelte van het scherm scrollt
function scrollWeergave() {
    var match = document.querySelector('#alleMatches');
    var matchPlek = match.getBoundingClientRect().top;
    var schermPlek = window.innerHeight / 2;

    if (matchPlek < schermPlek) {
        match.classList.add('info-weergeven')
    }
    console.log(matchPlek);

}

//event listeners
btn.addEventListener("click", infoVerbergen);

window.addEventListener('scroll', scrollWeergave);

//proberen met keydown event
//checken welke knop er word gedrukt
window.addEventListener('keydown', (event) => {
    console.log(event);
})

//functie trigger met de A knop
document.addEventListener("keydown", function (event) {
    if (event.keyCode == 65) {
        info.classList.toggle("visible");
    }
});