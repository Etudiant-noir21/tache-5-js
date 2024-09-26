

const icone = `<span class="check"><i class="fa-solid fa-check"></i></span>`;

let tabLi = document.querySelectorAll('ul li');
let toggleAllBtn = document.getElementById('toggleAll');
let counter = document.getElementById('counter');

function updateCounter() {
    let activeCount = document.querySelectorAll('ul li.active').length;
    counter.textContent = `${activeCount} élément${activeCount > 1 ? 's' : ''} sélectionné${activeCount > 1 ? 's' : ''}`;
}

for (let li of tabLi) {
    li.addEventListener('click', function() {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
            this.innerHTML = this.innerText + icone;
        } else {
            this.innerHTML = this.innerText;
        }
        updateCounter();
    });
}

toggleAllBtn.addEventListener('click', function() {
    let allActive = document.querySelectorAll('ul li.active').length === tabLi.length;
    
    for (let li of tabLi) {
        if (allActive) {
            li.classList.remove('active');
            li.innerHTML = li.innerText;
        } else {
            li.classList.add('active');
            li.innerHTML = li.innerText + icone;
        }
    }
    updateCounter();
});

updateCounter();

