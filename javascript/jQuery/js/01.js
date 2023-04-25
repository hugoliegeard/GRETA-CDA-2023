/**
 *
 * DISPONIBILITE DU DOM
 *
 * A partir du moment ou mon DOM, c'est à dire
 * l'ensemble de l'arborescence de ma page HTML
 * est complètement chargé, je peux commencer
 * à utiliser jQuery !
 *
 * Mettre l'ensemble de notre code, dans une
 * fonction qui sera appelée AUTOMATIQUEMENT
 * par jQuery lorsque le DOM sera entièrement
 * défini.
 *
 * 3 façons de faire :
 *
 */

jQuery(document).ready(function() {
    // Ici, mon DOM est entièrement chargé.
    // Je peux commencer à utiliser jQuery.
    console.log('jQuery is ready to rock !');
});

// 2ᵉ méthode (rencontrée généralement)
$(document).ready(function() {
    console.log('jQuery is ready to rock !');
});

// 3ᵉ méthode (privilégiée)
$(function() {
    console.log('jQuery is ready to rock !');
});

// 4ᵉ méthode (déconseille à cause de la compatibilité)
$(() => {
    console.log('jQuery is ready to rock !');

    document.querySelector('#jeSuisUnId').innerHTML
        = '<strong>Je suis un texte en JS</strong>';

    $('#jeSuisUnId').html("<strong>Je suis un texte en JQ</strong>");

});