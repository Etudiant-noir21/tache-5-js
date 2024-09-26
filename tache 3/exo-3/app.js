//declaration des variables 
let x = "1";
let y = "2" ;
let z = x + y;
 

 //affichage du type et du nombre des variables  avant conversion
 console.log('/affichage avant conversion')
 console.log(`x = ${x}, type de x = ${typeof x}`);

 console.log(`y = ${y}, type de y = ${typeof y}`);

console.log(`z = ${z}, type de z = ${typeof z}`);
 console.log(z); //z = a 12 car ici la concatenation se 2 chaine de caracteres est realiser.

 //forcer le type de x et y en entier 

 x= parseInt(x);

 y = parseInt(y);

 z = x + y;

 // affichage apres conversion 
console.log('/affichage apres conversion')
 console.log(`x = ${x}, type de x = ${typeof x}`);
 console.log(`y = ${y}, typeof y = ${typeof y}`);

 console.log(`z = ${z}, type of z = ${typeof z}`);