// Fonction pour afficher la définition et l'utilisation d'une boucle
function afficherDefinitionEtUtilisation(typeDeBoucle) {
   
  // Dictionnaire contenant les définitions et exemples pour chaque type de boucle
    const boucles = {

      // for : exemple et definition 
      "for": {
        definition: "La boucle 'for' est utilisée pour itérer sur un ensemble d'éléments (comme un tableau) ou pour répéter un bloc de code un nombre de fois défini.",
        exemple: `
  Exemple d'utilisation de la boucle 'for' en JavaScript :
  for (let i = 0; i < 5; i++) {
    console.log("Itération", i);
  }`
      },
    
      //while exemple et definition

      "while": {
        definition: "La boucle 'while' est utilisée pour répéter un bloc de code tant qu'une condition est vraie. Si la condition est fausse dès le début, le code ne s'exécutera jamais.",
        exemple: `
  Exemple d'utilisation de la boucle 'while' en JavaScript :
  let compteur = 0;
  while (compteur < 5) {
    console.log("Compteur:", compteur);
    compteur++;
  }`
      },
      // do-while exemple et definition
      "do-while": {
        definition: "La boucle 'do-while' exécute le bloc de code au moins une fois, puis répète tant qu'une condition est vraie.",
        exemple: `
  Exemple d'utilisation de la boucle 'do-while' en JavaScript :
  let compteur = 0;
  do {
    console.log("Compteur:", compteur);
    compteur++;
  } while (compteur < 5);`
      }
    };
    // declaration des variables definition et exemple pour la recuperation sur la page
    const definitionElement = document.getElementById('definition');
    const exempleElement = document.getElementById('exemple');

    // Vérification si le type de boucle existe dans le dictionnaire
    if (boucles[typeDeBoucle]) {
      definitionElement.innerHTML = `<strong>Definition :</strong> ${boucles[typeDeBoucle].definition}`,
      exempleElement.innerHTML= `<strong>Exemple :</strong> ${boucles[typeDeBoucle].exemple}` 
    } else {
      definitionElement.innerHTML= `Le type de boucle '${typeDeBoucle}' n'est pas reconnu. Essayez 'for', 'while' ou 'do-while'.`;
    }
  }
  
//   Demande à l'utilisateur d'entrer un type de boucle
  let typeDeBoucle = prompt("Entrez un type de boucle (for, while, do-while) :");

  // appel de la fonction 
  afficherDefinitionEtUtilisation(typeDeBoucle);

 document.getElementById('for').innerHTML.boucles[typeDeBoucle].definition;