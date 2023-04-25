// 1. A la soumission du formulaire
const form = document.querySelector('#contact');
form.addEventListener('submit', function (event) {

    // Bloquer le rechargement de la page.
    event.preventDefault();

    // Réinitialiser les erreurs
    if (document.querySelector('.alert')) {
        document.querySelector('.alert').remove();
    }

    // Déclaration des variables
    const titre =  document.querySelector('h1');
    const sujet =  document.querySelector('#sujet');
    const email =  document.querySelector('#email');
    const message =  document.querySelector('#message');

    // Vérifier si l'un des 3 champs n'a pas été remplis.
    if( sujet.value.length === 0
        || email.value.length === 0
        || !isEmailValid(email.value)
        || message.value.length === 0 ) {

        titre.parentNode.insertBefore(
            createAlert('danger', "Oops, merci de bien remplir vos champs !"),
            titre.nextSibling
        );

        // Permet d'afficher le champ en rouge si il est invalide.
        if(!isEmailValid(email.value)) {
            email.className = 'form-control is-invalid';
        }

    } else {
        titre.parentNode.insertBefore(
            createAlert('success', "Merci, votre message à bien été transmis"),
            titre.nextSibling
        );
        contact.reset();
    }
});

/**
 * Permet de créer une alerte bootstrap
 * @param type
 * @param message
 */
function createAlert(type, message) {
    const div = document.createElement('div');
    div.className = 'alert alert-'+ type;
    div.textContent = message
    return div;
}

function isEmailValid(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}
