// alert("Hello world!");

// Deux slash pour faire un commentaire sur une ligne

/*
    Ici, je peux faire un commentaire
        sur plusieurs lignes.

        RACCOURCI :
        CTRL + /  -> 1 ligne
        SHIFT + ALT + A   -> x lignes
        
*/

// -- 1 : Déclarer une variable en JS.
var prenom;

// -- 2 : Affecter une valeur a la variable prenom.
prenom = 'Hugo';

// -- 3 : Afficher la valeur dans la console du navigateur.
console.log(prenom);

// console.log(Prenom); : caught ReferenceError: Prenom is not defined car Javascript est sensible à la casse.

// -------- LES TYPES DE VARIABLES -------- //

console.log( typeof prenom ); // -> STRING

var age = 35;
console.log( typeof age ); // -> NUMBER

var decimale = -2.948;
console.log( typeof decimale ); // -> NUMBER

var boolean = true; // 1
console.log( typeof boolean ); // -> NUMBER


// -------- LES CONSTANTES -------- //

/*
    La déclaration const me permet de créer
    une constante accessible UNIQUEMENT en 
    LECTURE. Sa valeur ne pourra pas être
    modifiée par des réaffectations ultérieures.
*/

const HOST = "localhost"
const DBNAME = "greta"
const USERNAME = "root"
const PASSWORD = "mysql"

// Je ne peux pas faire cela...
// HOST = "10.2.45.185";
// Uncaught TypeError: Assignment to constant variable.

