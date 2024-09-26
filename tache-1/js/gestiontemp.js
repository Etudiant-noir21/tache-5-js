// stocke nos element dans une constante
const horloge = function(){

// Recuperation du date d'aujourd'huit
let date = new Date();
// console.log(date)

// Recuperation de l'heure dans la date du jour
let heure = date.getHours();

// recuperation des minutes de l'heur dans la date du jours
let minutes = date.getMinutes();

// Recuperation des secondes de l'heur dans la date du jour
let secondes = date.getSeconds();

// si les secondes sont inferieurs a 10 on ajoute un 0 devant
if(secondes < 10){
    secondes = '0' + secondes;
}

if(minutes < 10){
    minutes = '0' + minutes;
}

// affichage correct de l'heur 
let affichage = heure + ":" + minutes + ":" + secondes;

document.querySelector("#horloge").innerText = affichage;

};


// on fait appel a notre horloge toues les milisecondes
window.setInterval(horloge, 1000);
