/* ---------------------------
       LES FONCTIONS 😝


    Principe de SOLID, KISS a regarder.
----------------------------*/

function bonjour() {
    // -- instruction js --
    // -- instruction js --
    alert('Bonjour !');
    // -- instruction js --
    // -- instruction js --
}

/**
 * J'execute ma fonction et je déclenche ses instructions.
 */
//bonjour();


function ditBonjour( prenom, nom ) {
    console.log(prenom + ' ' + nom);
    return
        'Bonjour <strong>'
        + prenom
        + ' '
        + nom
        +'</strong> !<br>'
    ;
}

document.write( ditBonjour('Hugo', 'LIEGEARD') );
console.log ( ditBonjour('Binta', 'NIANG') );

/**
 * EXERCICE : 
 * 1. Créez une fonction permettant d'effectuer l'addition de deux nombres.
 * 2. Créez une fonction permettant d'effectuer le calcul de la TVA d'un montant HT.
 * 2 BONUS : Sachant que, le taux de TVA peut varier... 5.5, 8.5, 10, 20. Retourner le montant TTC.
 * 3. Créez une fonction permettant d'effectuer la conversion d'unmontant de EURO vers DOLLARS US.
 */

function addition( nb1, nb2 ) {
    return nb1 + nb2;
}

console.log( addition(10,5) );

function tva( prixHt, tauxTva = 20 ) {
    return prixHt + ( prixHt * ( tauxTva / 100 ) );
}

console.log( tva(10) );
console.log( tva(10, 5.5)  );
console.log( tva(10, 8.5) );

function convertEurToUsd( montantEur, tauxDeChangeUsd = 1.0981 ) {
    const conversionUsd = montantEur * tauxDeChangeUsd;
    return conversionUsd;
}

montantEur = 20;
console.log(

    montantEur
        + ' € en $ donne : '
        + convertEurToUsd( montantEur ).toFixed(2)
        + '$'

)