//stockage de nos images 
const images = document.querySelectorAll('#galery img');
let imgactive = 0;
images[imgactive].classList.add('show')
// creation d'un boucle pour cacher toutes les images sauf la premiere
for(let i = 1; i < images.length; i += 1){
    images[i].classList.add('hidden');
}
// click sur bouton suivant
document.querySelector('#next').addEventListener('click', function(){
next();
});

//variable global pour stocke l'interval de temps
let interval;
// click pour le bouton play
document.querySelector('#play').addEventListener('click', function() {
   
 interval =  setInterval(next ,2000);  // creation de l'interval de tps
});

// click pour le bouton pause
document.querySelector('#pause').addEventListener('click', function() {
    
  clearInterval(interval); // destruction de l'interval de tps
  });
// fonction photo suivante
const next = function() {
    images[imgactive].classList.remove('show')
    images[imgactive].classList.add('hidden')
    imgactive += 1;

    // pour revenir a la premiere image si les
if(imgactive >= images.length){
    imgactive = 0;
}
    images[imgactive].classList.remove('hidden')
    // gerer le temps entre l'ajout du show et la suppression de hidden
    setTimeout(function(){
        images[imgactive].classList.add('show')

    }, 300);
};

// click pour la bouton precedentes
document.querySelector('#prev').addEventListener('click', function(){
    prev();
});

const prev = function() {
    images[imgactive].classList.remove('show')
    images[imgactive].classList.add('hidden')
    imgactive -= 1;

    // pour revenir a la premiere image si les
if(imgactive < 0){
    imgactive = images.length - 1;
}
    images[imgactive].classList.remove('hidden')
    // gerer le temps entre l'ajout du show et la suppression de hidden
    setTimeout(function(){
        images[imgactive].classList.add('show')

    }, 300);
}


// gestion touche du clavier
window.addEventListener('keydown', function(e) {
    // la touche droite
  if(e.key == 'ArrowRight'){
    next();
  }
//   touche gauche
  if(e.key == 'ArrowLeft'){
    prev();
  }
});
