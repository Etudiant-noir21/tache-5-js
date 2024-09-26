// condition if
let age = prompt('saisir votre age');

if (age < 18 ){    // alert(message?:any):void
    alert('vous etes un mineur');

}else if ()
else{
    alert("vous etes majeur");
}

//condition switch
let vehicule = prompt("Quel vehicule souhaitez vous ? Peugeot, ferrari, bmw").toLowerCase();
console.log(vehicule);
let km = prompt("combien de km souhaitew vous faire ?");

const prix = {
    peaugot:0.4,
    bmw:0.6,
    ferrari:0.8
};

switch (vehicule){
    case 'peaugeot':{
        alert('vous payerez:' + prix.peaugot + km + '€');
        break;
    }
    case 'bmw':{
        alert('vous payerez:' + prix.bmw + km + '€');
        break;
    }
    case 'ferrari':{
        alert('vous payerez:' + prix.ferrari + km + '€');
        break;
    }
    default:
        alert('veuillez choisir un vehicule propose dans la liste');
}