// demander un nombre entier a l'utilisateur

let n;
function demandeNombre (){
    while(true){
        let saisie = prompt("veuillez saisir un entier naturelle")
         n = parseInt(saisie);
         if(!isNaN(n) && Number.isInteger(n)){
            break;

         }else{
            alert("Ce n'est pas un nombre entier. Veuillez réessayer.");
         }
    }
}

// on appel la fonction pour demander une entier naturel
demandeNombre();

// Creation d'un table de multiplication
let table = '<table>';
table += "<tr><th>n</th><th>Multiplication</th><th>Résultat</th></tr>";

// boucle imbrique pour pour afficher le tableau html
for (let i = 1; i <= n; i++){
   let j = 1;
   do
    {
        j++;

        table += `<tr>
                    <td>${i}</td>
                    <td>${i} x ${j}</td>
                    <td>${i * j}</td>
                 </tr>`
    }while(j <=9)
}
table += '</table';

// // affichage du tableau dans la page
document.body.innerHTML = table;

// affichage des tables sur le console
function tableDemultiplication (nombre, final){
    for (n = 1; n <= final; n++){
        console.log(`${nombre} x ${n} = ${nombre * n}`);
    }
}
 
for(let m = 1; m <=10; m++){
    tableDemultiplication(m, 10);
    console.log('--------------------')
}

