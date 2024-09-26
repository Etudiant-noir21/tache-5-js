
let titles = document.querySelectorAll('#tabs .tab-titles li');

for(let title of titles){
    title.addEventListener('click', function (){
        //on recupere le numero du titre 
        let num = this.getAttribute('data-tabtitle');

        //on masque le div precedent

        document.querySelector('#tabs > div.active' ).classList.remove('active');

       //on reactive le div voulu
       document.querySelector('#tab' + num).classList.add('active');

       //on enleve la class du titre precedemment active

       document.querySelector('#tabs .tab-titles li.active').classList.add.remove('active');

       //on active le bon titre

       this.classList.add('active');
    });
}