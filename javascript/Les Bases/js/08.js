/* ------------------------------------------------
|     ~ 🦥  ~     LES CONDITIONS    ~ 🦥  ~       |
--------------------------------------------------*/
/**
 * 
var majoriteLegaleFr = 18;

if( 19 >= majoriteLegaleFr ) {
    alert('Bienvenue sur mon site !');
}

if(14 >= majoriteLegaleFr) {
    alert('Bienvenue sur mon site !');
} else if (17 == majoriteLegaleFr) {
    alert('C\'est un peu juste non ?');
} else {
    alert('Va voir chez Google si...')
}
 */

/*

    EXERCICE  : Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
    S'il a la majorité légale, alors je lui souhaite la bienvenue sur mon site.
    En revanche, s'il ne l'a pas, je le redirige sur Google, après l'avoir informé du soucis.

    1. Création d'une fonction
    2. Demande de l'age de l'utilisateur (prompt)
    3. Comparaison de l'age par rapport à la majorité française
    4. Si le user à plus de 18 ans
        Alors => j'affiche un message de bienvenue
       Sinon
        Affichage d'un message (soucis)
        Redirection
*/

function verif() {
    var age = parseInt(prompt("Saisir son age", "<--- Age -->"));
    if (age >= 18) {
        alert("Bienvenue sur le site");
    } else {
        alert("Allez voir sur Google si j'y suis !");
        location.href = 'https://www.google.fr';
    }
}
function verif2(majorite) {
    if (parseInt(prompt("Saisir son age", "<--- Age -->")) >= majorite) {
        alert("Bienvenue sur le site");
    } else {
        alert("Allez voir sur Google si j'y suis !");
        location.href = 'https://www.google.fr';
    }
}

verif();

/* ----------------------------------------------------------------------
    EXERCICE :
J'arrive sur un Espace Sécurisé au moyen d'un email et d'un mot de passe.
Je dois saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une "alert" m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
----------------------------------------------------------------------- */

// -- BASE DE DONNEES
const USER_EMAIL = "hugo@greta.fr";
const USER_PASS = "greta";

// -- 1. Demander à l'utilisateur son email et mdp
const emailPrompt = prompt("Quel est votre e-mail ?", "<Saisissez votre e-mail>");
const mdpPrompt = prompt("Quel est votre mot de passe ?", "<Saisissez votre mot de passe>");

// -- 2. Plusieurs méthodes pour vérifier les données saisies par mon utilisateur.

// A. IF IMBRIQUE
if ( USER_EMAIL === emailPrompt ) {
    if( USER_PASS === mdpPrompt ) {
        alert('Bienvenue ' + emailPrompt);
    }
}

// B. UNE SEULE CONDITION (Optimiser)
if ( USER_EMAIL === emailPrompt && USER_PASS === mdpPrompt ) {
    alert('Bienvenue ' + emailPrompt);
} else {
    alert('Attention, email ou mdp incorrect.');
}

// C. AVEC UNE FONCTION
function connexion( emailUser, mdpUser ) {
    if ( USER_EMAIL === emailUser && USER_PASS === mdpUser ) {
        return true;
    } else {
        return false;
    }
}

// -- Meme exemple simplifié (Pareil que l'exemple ci-dessus)
function isUserAuthenticated( emailUser, mdpUser ) {
    return USER_EMAIL === emailUser && USER_PASS === mdpUser;
}

if (!isUserAuthenticated(emailPrompt, mdpPrompt)) {
    alert('Attention, email ou mdp incorrect.');
}

alert('Bienvenue ' + emailPrompt);

/* -------------------------------------------------------------\
|               LES OPERATEURS DE COMPARAISON                   |
|   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   |
|                                                               |
|   L'Opérateur de comparaison " == " signifie : Egal à.        |
|   Il permet de vérifier que 2 variables sont identiques.      |
|                                                               |
|   L'Opérateur de comparaison " === " signifie : Strictement   |
|   égal à. Il va comparer la valeur, mais aussi le type !      |
|                                                               |
|   if( 14 == "14" ) {} = true                                  |
|   if( 14 === '14' ) {} = false                                |
|   if( 14 === 14 ) {} = true                                   |
|                                                               |
|   L'Opérateur " != " : Différent de.                          |
|   L'Opérateur " !== " : Strictement Différent de.             |
|                                                               |
|   if( 12 != 14 ) {} = true                                    |
|   if( 12 !== '14' ) {} = true                                 |
|   if( 12 !== 12 ) {} = false                                  |
|   if( 12 !== '12' ) {} = true ; Ici, 12 est bien différent    |
|   de 12 à cause du type.                                      |
|                                                               |
\ ------------------------------------------------------------ */



         /* -------------------------------------------|   |------------- *\
        /                                              |   |                \
       /           ~         LES OPERATEURS LOGIQUES          ~              \
      /_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\
        |                                                                   |
        |   # L'Opérateur ET : &&. Si la combinaison email et emailUser     |
        |   correspond, ET la combinaison mdp et mdpUser correspond.        |
        |                                                                   |
        |   --> Dans cette condition, les 2 doivent OBLIGATOIREMENT         |
        |   correspondre pour être validée.                                 |   
        |   Ex. if(emailUser === email && mdpUser === mdp) { ... }          |
        |                                                                   |
        |   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   |
        |                                                                   |
        |   # L'Opérateur OU : ||. Si la combinaison email et emailUser     |
        |   correspond, ET / OU la combinaison mdp et mdpUser correspond.   |
        |                                                                   |
        |   --> Dans cette condition, au moins l'une des deux doit          |
        |   correspondre pour être validée.                                 |
        |   Ex. if(emailUser === email || mdpUser === mdp) { ... }          |
        |                                                                   |
        |   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   |
        |                                                                   |
        |   # L'Opérateur " ! " ou encore NOT.                              |
        |   Il signifie le CONTRAIRE DE, DIFFERENT DE                       |
        |                                                                   |
        |   var monUtilisateurEstApprouve = true;                           |
        |   if ( !monUtilisateurEstApprouve ) { ... }                       |
        |   Si mon utilisateur n'est pas approuvé                           |
        |                                                                   |
        |  Revient à écrire                                                 |
        |  if ( monUtilisateurEstApprouve === false ) { ... }               |
        |                                                                   |
        \*_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _*/