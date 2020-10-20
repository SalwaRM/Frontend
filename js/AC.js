//declaratie DOM elementen
//const hamburger = document.getElementById('hamburger');
//const nav = document.getElementById('nav');

//hamburger.addEventListener('click');{
   // nav.classList.toggle('show');
//}


//declaratie DOM elementen
var hamburger = document.querySelector('#hamburger');
var nav = document.querySelector('#navul');


//toestand: globale variabelen/constanten initialiseren



// eventHandler functie : gooiDobbelsteen
function klikmenu(){
    nav.classList.toggle('show');
    hamburger.classList.toggle('rotate');
}



//eventListener toevoegen aan DOM element
// 'click'
hamburger.addEventListener('click', klikmenu);