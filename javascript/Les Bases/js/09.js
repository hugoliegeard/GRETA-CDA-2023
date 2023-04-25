/* ---------------------------------

          LES BOUCLES 💀☠️

----------------------------------*/

/***
 * Pour i = 0 ; Tant que i est inférieur ou égale à 10 ; 
 * alors, j'incrémente de 1.
 */
for ( let index = 0 ; index <= 10 ; index++ ) {
    document.write( '<p>Instruction executée : ' + index + ' </p>' );
}

document.write( '<hr>' );

j = 0;
while( j <= 10 ) {
    document.write( '<p>Instruction executée : ' + j + ' </p>' );
    j++;
}

/* ----------------
EXERCICE : En considérant le tableau suivants, affichez sur votre page ou dans la console,
la liste des prénoms.
-------------------*/

const prenoms = ['Jean', 'Hugo', 'Maxime', 'Pierre', 'Papier', 'Ciseau'];

for( let index = 0 ; index < 6 ; index++) {
    console.log( prenoms[index] );
}

/* ----------------
EXERCICE :Créer un tableau contenant les valeurs suivantes : 1, 2, 3, 4, 5, 6, 7, 8, 9.
Faire un boucle permettant d'additionner le total des chiffres.
Afficher le total dans la console.
-------------------*/

// 1. Déclarer une variable permettant de garder en mémoire le montant total des chiffres.
const chiffres = [1,2,3,4,5,6,7,8,9];
const nbElement = chiffres.length;

let resultat = 0;
for (let i = 0 ; i < nbElement ; i++) {
    resultat += chiffres[ i ];
}

console.log(resultat);
