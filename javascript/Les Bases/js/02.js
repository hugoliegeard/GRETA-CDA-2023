// -- Déclarer notre tableau indexé
var apprenants = [];
var learners = new Array; // Autre notation, mais identique.

apprenants[0] = 'Hugo';
apprenants[1] = 'Mathieu';
apprenants[2] = 'Binta';

console.log( apprenants );
console.log( apprenants[2] );

apprenants = ['Omar', 'Pierre', 'Patrick', 'Yoann'];
console.log( apprenants );
console.log( apprenants[1] );

// -- Créer un objet en javascript

var apprenant = {
    // Propriété    :      Valeur
    prenom          :      'Hugo',
    nom             :      'LIEGEARD',
    age             :      35
};

console.clear(); // Vider la console.
console.log( apprenant );
console.log( apprenant['prenom'] );
console.log( apprenant.prenom ); // Ecriture à privilégier

// -- La deuxième dimension !

var annuaireDesApprenants = [
    { prenom:'Hugo', nom:'LIEGEARD', age:33 },
    { prenom:'Killian', nom:'RICHARD', age:27 },
    { prenom:'Mo', nom:'NDOYE', age:40 },
    { prenom:'Binta', nom:'NIANG', age:43 },
];

console.log( annuaireDesApprenants );
console.log( annuaireDesApprenants[2].prenom );

var contact = [
    {
        prenom: 'John',
        nom: 'DOE',
        coordonnees: {
            adresse: {
                rue: '10 Rue de l\'Avenir',
                cp: 95240,
                ville: 'Cormeilles en Parisis',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'john.doe@gmail.com',
            tel: {
                fixe: '09 50 708 708',
                fax: '09 50 708 709',
                port: '08 45 56 18 09',
            }
        }
    },
    {
        prenom: 'Jane',
        nom: 'DOE',
        coordonnees: {
            adresse: {
                rue: '10 Rue de l\'Avenir',
                cp: 95240,
                ville: 'Cormeilles en Parisis',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'jane.doe@gmail.com',
            tel: {
                fixe: '09 50 708 708',
                fax: '09 50 708 709',
                port: '08 54 65 09 17 78',
            }
        }
    }
];

// Afficher le prénom et le pays de John : 
console.log( contact[0].prenom );
console.log( contact[0].coordonnees.adresse.pays.nom );
console.log('-----------');
console.log( contact[1].prenom );
console.log( contact[1].coordonnees.adresse.pays.nom );

/* ------------------------------------------
                CONSIGNE

    Réaliser une structure JSON, permettant
    destocker des recettes de cuisine.
--------------------------------------------*/

var recettes = [
    {
        nom: 'Poulet au four',
        nbPersonnes: 12,
        difficulte: 'Facile',
        specialite: 'Française',
        categorie: 'Plat',
        sousCategorie: 'Viande',
        duree: {
            preparation: 40,
            cuisson: 60,
            repos: null,
        },
        cuisson: {
            prechauffe: 200,
            temperature: 200,
            mode: 'Chaleur Tournante'
        },
        ingredients: [
            {nom: 'Poulet Entier', qte: 6, unite: 'pièce', image: 'https://www..........'},
            {nom: 'Poivre', qte: 10, unite: 'g', image: 'https://www..........'},
            {nom: 'Sel', qte: 20, unite: 'g', image: 'https://www..........'},
            {nom: 'Piment Végétarien', qte: 4, unite: 'pièce', image: 'https://www..........'},
            {nom: 'Jus de Citron', qte: 10, unite: 'cl', image: 'https://www..........'},
        ],
        ustensiles: [
            {nom: 'Plat Rectangle ou Rond', qte: 6, image: 'https://www..........'},
        ],
        instructions: [
            {
                description: 'Commencez par commander les poulets',
                photoUrl: 'https://www..........'
            },
            {
                description: 'Nettoyer le poulet',
                photoUrl: 'https://www..........'
            },
        ]
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
];

// --- AJOUTER UN ELEMENT DANS UN TABLEAU

console.clear();

var couleurs = ['Rouge', 'Jaune', 'Vert'];
console.log(couleurs);

couleurs.push('Bleu'); // Ajouter a la fin du tableau
console.log(couleurs);

couleurs.unshift('Orange'); // Ajouter au début du tableau
console.log(couleurs);

// -- SORTIR UN ELEMENT DU TABLEAU

var monDernierElement = couleurs.pop(); // Supprimer le dernier élément et le retourne. cf. shift() : Premier élément. splice : plusieurs éléments.