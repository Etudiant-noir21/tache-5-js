const horloge = function() {
    let date = new Date();
    
    let heure = date.getHours();
    
    let minutes = date.getMinutes();
    
    let secondes = date.getSeconds();
    
   if(heure < 10){
   heure = '0' + heure;
   }
   if(minutes < 10){
    minutes = '0' + minutes;
    }
    if(secondes < 10){
        secondes = '0' + secondes;
        }
     let affichage = heure + ':' + minutes + ':' + secondes;

     document.querySelector('#horloge').innerText = affichage;

    };
    window.setInterval(horloge);