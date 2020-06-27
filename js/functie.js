// const info = document.querySelector('#verstopInfo', 'verstopInfoTwee');

// function hideInfo() {
//     info.classList.toggle("visible");
//     console.log("testen");
// };

// info.addEventListener("click", hideInfo);

function scrollWeergave(){
    var match = document.querySelector('#test');
    var matchPlek = match.getBoundingClientRect().top;
    var schermPlek = window.innerHeight / 2;

    if (matchPlek < schermPlek){
        match.classList.add('info-weergeven')
    }
    console.log(matchPlek);

}

window.addEventListener('scroll', scrollWeergave);