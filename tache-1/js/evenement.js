let tbds = document.querySelectorAll('tbody tr')

for(let tr of tbds){
    tr.addEventListener('click',()=>{
        tr.classList.toggle('gris')
    })
};

 document.querySelector(' gray').classList.add('.vert');



