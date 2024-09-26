// for(let i = 0; i < 9; i++){
//     const box = document.createElement('div');
//     box.classList.add('box');
//     document.querySelector('.container').appendChild(box);
// }

// const btn = document.querySelector('.btn');
// const randomcolorBlock = document.querySelector('.box');

// function randomcolorBlock() {
//     var chars = '0123456789abcdf';
//     var colorLength = 6;
//     var color = '';

//     for(var i = 0; i < colorLength; i++){
//         var randomcolorBlock = Math.floor(Math.random() * chars.length);
//     }
//     return `#` + color;
// }

// function addColor(){
//     randomcolorBlock.array.forEach(e => {
//         var newColor = randomcolorCode();
//         e.style.backgroundColor = newColor;
//     });
// }
// Création des boîtes
// Création des boîtes
for(let i = 0; i < 9; i++){
    const box = document.createElement('div');
    box.classList.add('box');
    
    // Ajouter un élément <span> pour afficher la couleur
    const colorLabel = document.createElement('span');
    colorLabel.classList.add('color-label');
    box.appendChild(colorLabel);
    
    document.querySelector('.container').appendChild(box);
}

// Sélection du bouton et des boîtes
const btn = document.querySelector('.btn');
const boxes = document.querySelectorAll('.box');

// Fonction pour générer une couleur aléatoire
function randomColor() {
    var chars = '0123456789abcdef';
    var colorLength = 6;
    var color = '';

    for(var i = 0; i < colorLength; i++){
        var randomIndex = Math.floor(Math.random() * chars.length);
        color += chars[randomIndex];
    }
    return `#` + color;
}

// Fonction pour ajouter une couleur aléatoire à chaque boîte et afficher son nom
function addColor(){
    boxes.forEach(box => {
        var newColor = randomColor();
        box.style.backgroundColor = newColor;
        
        // Ajouter le code couleur à l'intérieur de chaque boîte
        box.querySelector('.color-label').textContent = newColor;
    });
}

// Ajout d'un événement au bouton pour changer les couleurs
btn.addEventListener('click', addColor);
