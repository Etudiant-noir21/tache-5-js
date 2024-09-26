const horloge = function(){


// on recupere la date 
let date = new Date();
// console.log(date)

// on recupere l'heure

let heure = date.getHours();

// on recupere les minutes
let minutes = date.getMinutes();

// on recupere les secondes 
let secondes = date.getSeconds();

// si les minutes sont inferieurs a 10 on ajoute un 0 devant
if(minutes < 10){
    minutes = '0'+ minutes;
}

//  si les secondes sont inferieurs a 10 on ajoute un 0 devant

if(secondes < 10){
    secondes = '0'+ secondes;
}

// on va declarer  l'affichage  normale de l'heure

let affichage = heure + ':' + minutes + ':' + secondes;

//on veut afficher l'heure sur le navigateur

document.querySelector("#horloge").innerText = affichage;

};

// on veut afficher l'horloge chaque miliseconde

window.setInterval(horloge, 1000)
