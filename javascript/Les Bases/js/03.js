/* ------------------------------
        LA CONCATENATION 🐣
--------------------------------*/

var debutDePhrase = "Aujourd'hui ";
var dDJ = new Date();
var suiteDePhrase = ", sont présents : ";
var nbApprenants = 12;
var finDePhrase = " apprenants.<br>";

/* ---
    Je souhaite afficher grâce à la concaténation,
    cette phrase sur ma page HTML.

    En javascript, on utilise le " + " pour la concaténation.
 --- */

document.write(
    debutDePhrase
    + dDJ.getDate() + '/' + (dDJ.getMonth()+1) + '/' + dDJ.getFullYear()
    + suiteDePhrase
    + nbApprenants
    + finDePhrase
);

// --  A découvrir pour les dates : https://momentjs.com/