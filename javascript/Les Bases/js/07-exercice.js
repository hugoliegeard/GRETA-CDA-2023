/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */

// -- 1. Création de la fonction
function presentation() {

    // -- 2. Demander a l'utilisateur son prénom via un prompt.
    var prenom = prompt("Quel est votre prénom ?", "<Votre prénom>"); 

    // -- 3. Demander son age à l'utilisateur ?
    var age = parseInt(prompt("Bonjour " + prenom + ". Quel est votre age ?", "<Votre age>"));
    console.log( age );
    console.log( typeof age );

    // -- 4. Calculer son année de naissance
    var date = new Date();
    var anneeActuelle = date.getFullYear();
    var dateDeNaissance = anneeActuelle - age;

    // -- 5. Afficher le récapitulatif
    document.write("Bonjour " + prenom + ", tu es né en " + dateDeNaissance + " !");

}

presentation();