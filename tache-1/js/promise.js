//Creation de la promesse
const promiseGetUsers = new Promise(function(resolve, reject){
        if(typeof Users !== 'undefined') {
            resolve(Users);
        }else{
            reject('Acces aux users impossible');
        }
    });
//Recuperer l'etat de la promesse 
promiseGetUsers
.then(function(u){
    let liste='<ul>';
    for(let user of u){
        liste += `<li>${user.name}</li>`;
    }
    liste += '</ul>';
    document.querySelector('#users').innerHTML = liste;
})
.catch(function(e){
    console.log(e);
});
//**************************News*************** */
//Creation de la promesse
const promiseGetNews = new Promise(function(resolve, reject){
    if(typeof NEWS !== 'undefined') {
        resolve(NEWS);
    }else{
        reject('Acces aux news impossible');
    }
});
//Recuperer l'etat de la promesse 
promiseGetNews
.then(function(n){
let liste='<ul>';
for(let actu of n){
    liste += `<li>${actu.title}</li>`;
}
liste += '</ul>';
document.querySelector('#news').innerHTML = liste;
})
.catch(function(e){
console.log(e);
});

