let form = document.querySelector('#loginform');
// On ecoute la modification de l'email
form.email.addEventListener('change', function() {
    // on creer une fonction suivante
    validEmail(this);
});

// on ecoute la modification du password
form.password.addEventListener('change', function() {
    // on creer une fonction suivante
    validPassword(this);
});

// on ecoute la soumission du formulaire

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(validEmail(form.email) && validPassword(form.password)) {
     form.submit();
    }else{
        console.log('email non valide');
    }
    // on creer une fonction suivante
    validPassword(this);
});
// *********** validation Email ************
const validEmail = function(inputEmail) {
    // creation de la reg exp pour validation de l'email
    let emailRegExp = new RegExp(
        // les differentes caracteres valide pour saisir une address email
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 
        'g'
    );
    
// Recuperation de la balise small
    let small = inputEmail.nextElementSibling;
    // on test l'expression regulier
    if(emailRegExp.test(inputEmail.value)){
        small.innerHTML = 'Adresse Valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }
    // si le testemail n'est pas vrai
    else{
         small.innerHTML = 'Adresse n est pas Valide';
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
};

// *********** validation password ************
const validPassword = function(inputPassword) {
    let msg ;
    let valid = false;
//    au moins 3 caracteres dans le mdp

if(inputPassword.value.length < 3){
    msg = 'le mot de passe doit contenir au moins 3 caracters';
}
// au moins 1 maj
else if(!/[A-Z]/.test(inputPassword.value)){
    msg = 'le mot de passe doit contenir au moins un majuscule';
}
// au moins 1 miniscule
else if(!/[a-z]/.test(inputPassword.value)){
    msg = 'le mot de passe doit contenir au moins un minuscule';
}
// au moins 1 chiffre
else if(!/[0-9]/.test(inputPassword.value)){
    msg = 'le mot de passe doit contenir au moins un chiffre';
}
// mot de passe valide
else{
    msg = 'Le mot de passe est valide';
    valid = true;
}

// affichage 
// recuperation de la balise small
let small = inputPassword.nextElementSibling;
// on test l'expression regulier
if(valid){
    small.innerHTML = 'mot de pass Valide';
    small.classList.remove('text-danger');
    small.classList.add('text-success');
    return true;
}
// si le testemail n'est pas vrai
else{
     small.innerHTML = msg;
    small.classList.remove('text-success');
    small.classList.add('text-danger');
    return false;
}
};