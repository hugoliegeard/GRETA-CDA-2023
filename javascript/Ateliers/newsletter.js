/**
 * LE DOM : Interface de développement en JS pour HTML.
 * Grâce au DOM je vais pouvoir accéder / modifier mon HTML.
 *
 * L'Objet "document" : c'est le point / la porte d'entrée
 * vers mon contenu HTML.
 *
 * Chaque page chargé dans mon navigateur, dispose
 * de cet objet.
 */

/**
 * Comment puis-je faire pour récupérer
 * les différentes informations de ma page HTML ?
 */

const newsletter = document.getElementById('newsletter');
console.log( newsletter );

// -- Connaitre l'ID de la balise ?
console.log( newsletter.id );

// -- Connaitre les classes ?
console.log( newsletter.className );

// -- Sélectionner la balise H1
const h1 = document.getElementsByTagName('h1');
const titre = h1[0];
console.log( titre );

// -- Récupérer le texte de ma balise ?
console.log( titre.textContent );

// -- Modifier le texte de ma balise en JS...
titre.textContent = "Lettre d'information"; // Uniquement du texte
titre.innerHTML = "<u>Lettre d'information</u>"; // Avec du HTML.

/**
 * AJOUTER UN ELEMENT SUR MA PAGE HTML
 */

// Création d'une balise <p>
const h4 = document.createElement('h4');

// Je donne un ID a ma nouvelle balise
h4.id = 'description';

// Ajouter du texte
h4.textContent = "Inscrivez-vous pour recevoir toute notre actualité !"

// Comment afficher cette balise <p> sur notre page ?

// Je place le paragraphe dans la newsletter.

// Place l'élément dans la balise newsletter A LA FIN.
// newsletter.append( h4 );

// Place l'élément dans la balise newsletter AU DEBUT.
// newsletter.prepend( h4 );

console.log(titre.nextSibling);
console.log(titre.parentNode);
titre.parentNode.insertBefore(h4, titre.nextSibling);

/**
 * LES EVENEMENTS
 */

const email = document.querySelector('#email');
console.clear(); // Vide la console

/**
 * Je vais écouter les "CHANGEMENTS" (évènement)
 * qui sont effectuer par l'utilisateur sur mon champ email.
 * --------------------------------------------------------
 * Lorsqu'un changement se produira sur mon champ EMAIL,
 * javascript déclenchera la fonction checkEmail pour nous.
 */
email.addEventListener('change', checkEmail);

/**
 * Permet (lorsqu'elle est appelée)
 * d'activer le bouton d'envoi.
 */
function checkEmail() {
    // Vérification de la valeur dans la console
    console.log( email.value );

    // Récupération du bouton
    const button = document.querySelector('button.btn');

    // Activation du bouton.
    button.disabled = false;
}

/**
 * LES DIFFERENTS EVENEMENTS
 *
 * MOUSE (Souris)
 *
 *      - click         : au clic sur un élement ;
 *      - dblclick      : au double clic sur un élement ;
 *      - mouseenter    : la souris passe au dessus d'un élément ;
 *      - mouseleave    : la souris sors de l'élement ;
 *      - mouseover     : au passage de la souris.
 *
 * KEYBOARD (Clavier)
 *
 *      - keydown       : une touche est enfoncé ;
 *      - keyup         : une touche est relachée.
 *
 * WINDOW (Fenêtre)
 *
 *      - scroll        : défilement de la fenêtre ;
 *      - resize        : redimentionnement de la fenêtre.
 *
 * FORM (Formulaire)
 *
 *      - submit        : Le formulaire a été soumis par l'utilisateur ;
 *      - change        : <input> <select> <textarea>, détecte les changements de contenu ;
 *      - input         : capter la saisie d'un utilisateur dans le champ <input>.
 *
 */

/**
 * Je veux écouter la soumission de mon formulaire de newsletter,
 * puis afficher a l'utilisateur un message de confirmation dans
 * une alerte bootstrap.
 */

newsletter.addEventListener('submit', function (event) {

    /**
     * Par défaut, la soumission du formulaire, entraine le
     * raffraichissement de la page.
     */

    event.preventDefault(); // Permet de bloquer le rechargement de la page.
    console.log( event );

    // Création de notre alerte
    const div = document.createElement('div');
    div.className = 'alert alert-success';
    div.textContent = "Merci, votre demande d'inscription a bien été prise en compte."

    // Affichage de l'alerte sur la page
    titre.parentNode.insertBefore(div, h4.nextSibling);

    // Réinitialisation du formulaire
    newsletter.reset();

});