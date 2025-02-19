// attraper l'input par le biais de l'ID
document.querySelector('#cp').addEventListener('input', function(){
    if(this.value.length == 5){
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codespostaux,
        commune,population&format=json&geometry=centre`
        fetch(url).then((response) =>
        response.json().then((data)=> {
            console.log(data);
            let affichage = '<ul>';
            for(let ville of data){
                affichage += `<li><strong>${ville.nom}</strong> - ${ville.population} habitants</li>`
            }
            affichage += '</ul>';
            document.querySelector('#ville').innerHTML = affichage;
        })
        ).catch(err => console.log('erreur :' + err));

    }
})