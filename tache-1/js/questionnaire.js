const questions = [
    {
        question : 
        'A quel compositeur est consacre le film Amadeus ?\n1. Beathoven\n2. Mozart',
        reponse : 2
    },
    {
        question:
        "Quelles est la capitale de l'Autriche? \n1. Vienne\n2.Oslo",
        reponse: 1
    },
    {
        question:
        'Quel organe est perturbe par les acouphenes ?\n1. Les pieds\n2. Les Oreilles',
        reponse: 2
    }
];
// **********debut du jeu*************
let nbBonneReponse = 0; //le nombre de bonne reponse de l'utilisateur
                                      //i prend + 1 a chaque fois
for(let i = 0; i < questions.length; i += 1) { //for nous permettra de repeter n fois le prompt
    let repUser = prompt(questions[i].question); //pour stocke le nbre de bonne reponse 
    if(repUser == questions[i].reponse) { //if nous permet de comparer la reponse de user et de la bonne reponse
        alert('Reponse bonne'); // afficher une alert pour les bonnes reponses
        nbBonneReponse += 1; // pour afficher le resultat du nombre de bonne reponse a la fin
    } else {
        alert('Reponse Fausse');// alert pour mauvaise reponse
    }
}
if (nbBonneReponse <= 1){//vous on a qu'une seule bonne reponse 
    alert(`vous avez ${nbBonneReponse} bonne reponse sur ${questions.length}`); //alert pour le nbre de bonne reponse
} else { // si on a +sieurs bonne reponses 
    alert(`vous avez ${nbBonneReponse} bonnes reponses sur ${questions.length}`);

}