//Declaration *affectation
let Prenom = 'Gael'; //sring

let age = 37;//number

let enligne = true; //boolean
let choix = null; // Null

console.log(typeof Prenom)
console.log(typeof age)
console.log(typeof enligne)
console.log(typeof choix)

//concatenation
console.log(Prenom + ' ' + age + 'ans');
console.log("je m'appelle $(prenom), j'ai $(age) ans ");

//Echanger un caractere antislash
console.log('il fait "beau aujourd\'hui"');

const VILLE = 'Rouen'

// Array
let tab = ['pommes', 30, true, ['bleu', 'rouge']];
//la grandeur du tableau
console.log(tab.length);
//index 1
console.log(tab[1]);
//mot rouge
console.log(tab[3][1]);

//object
let personne = {
    Prenom: 'Baba',
    age: 22,
    address: {
        rue: '12 rue de yeumbeul',
        ville: 'yeumbeul'
    }
};

console.log(personne.Prenom);
console.log(personne['Prenom']);
console.log(personne.address.rue);


let a = 6;
let b = 2;
//addition
console.log(a + b);
//soustraction
console.log(a - b);
//multiplication
console.log(a * b);
//division
console.log(a / b);
//modulo
console.log(a % b);

//incrimenté
a += 1; //avec equivaut a = a+1
console.log(a);

//descrementé
b -= 1 //b= b-1
console.log(b)