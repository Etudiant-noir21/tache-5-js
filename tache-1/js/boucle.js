//Boucle FOR
for (let i = 0; i < 3; i += 1) {
    console.log('Boucle: ' + i);
}
//pqrcourir un tableau

let tab = ['pommes','fraise','poires'];

console.log('--for--')
for (let i = 0; i < tab.length; i += 1){
    console.log(tab[i]);
}

console.log('--while--');
let j = 0;
while(j < tab.length){
    console.log(tab[j]);
    j += 1;
}
console.log('--Do while--');
let k = 10;
do {
    console.log(tab[k]);
    k += 1;
}while (k < tab.length);
//for in: iterer sur les cles d'un objetc
let voiture = { marque: 'peageot', moteur: 'essense' };

console.log('--for IN--');
for (let k in voiture) {
    console.log(k);
}

//for of: iterer sur les cles d'un objetc
let tab2 = ['bleu', 'blanc' , 'rouge' ];

console.log('--for OF--');
for (let v of tab2) {
    console.log(v);
}