//variablen aanmaken
let info = document.querySelector('#alleMatches');
let btn = document.querySelector('#knop');

//functie om informatie van een match te verbergen
function infoVerbergen() {
    info.classList.toggle("invisible");
    console.log("testen");
};

//BRON: MDN. (2020a, 6 mei). Element.getBoundingClientRect(). Geraadpleegd van https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
//BRON: stackOverflow. (2014, 2 september). JavaScript getBoundingClientRect() changes while scrolling. Geraadpleegd van https://stackoverflow.com/questions/25630035/javascript-getboundingclientrect-changes-while-scrolling
//BRON: Kantor, I. (2020, 13 juni). Coordinates. Geraadpleegd van https://javascript.info/coordinates

//Functie om de matches in het scherm te laden faden zodra je op een bepaald gedeelte van het scherm scrollt
function scrollWeergave() {
    var match = document.querySelector('#alleMatches');
    var matchPlek = match.getBoundingClientRect().top; //berekenen hoeveel pixels de variabel van de top is
    var schermPlek = window.innerHeight / 2; // aangeven op welk moment je de visualisatie wil plaats laten vinden ik hem op de helft van de pagina gedaan

    if (matchPlek < schermPlek) { //zodra de matchPlek kleiner is dan de schermPlek word de info weergeven door css toe te voegen
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
        info.classList.toggle("invisible");
    }
});


