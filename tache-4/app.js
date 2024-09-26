let age = prompt('Saisir votre age');
// age compris entre 0 - 14 ans
if(age >= 0 && age <=14){
    alert('vous etes un enfant')
    // age entre 15 et 25 ans
}else if(age >=15 && age <=25){
    alert('vous etes un(e) Adolescent(e)')
    // age compris entre 25 et 64 ans
}else if(age >25 && age<=64){
    alert('vous etes un adulte')
}
// 65 ans et plus
else if(age >=65){
    alert('vous  etes  un Aîné')
}else{
    alert('tu n existe pas mec')
}