"use strict";
// Un générique permet d'écrire un exemple qui fonctionne avec plusieurs types.
// T1 et T2 sont des noms pour les types que TypeScript connaîtra au moment de l'appel.
// Fonction générique
// Le premier argument a le type T1, le second le type T2.
// Le : T1 après les parenthèses indique que le résultat a le type du premier argument.
function identity(arg, arg2) {
    return arg; // arg2 est accepté et vérifié par TypeScript, mais il n'est pas utilisé ici.
}
// On choisit string pour T1 et number pour T2. Le résultat est "myString", de type string.
let outputS = identity("myString", 5);
// identity("myString", 5) fonctionne aussi. TypeScript déduit les types à partir des arguments.
// Classe générique
// T fixe le type de dataA et U celui de dataB pour chaque objet créé.
class MaClasse {
    dataA;
    dataB;
    // Le constructeur remplit les deux propriétés dès la création de l'objet.
    constructor(dataA, dataB) {
        this.dataA = dataA;
        this.dataB = dataB;
    }
}
// Ici, dataA vaut 999 et doit rester un nombre. dataB vaut "du texte" et doit rester du texte.
let value = new MaClasse(999, "du texte");
let key1 = { dataA: 1, dataB: "Steve" }; // Nombre puis texte.
let key2 = { dataA: 2, dataB: 12345 }; // Deux nombres.
// T extends PersonneAvecNom exige au minimum un prénom et un nom, tous deux en texte.
// L'objet peut avoir d'autres propriétés. La fonction peut toujours lire les deux noms.
function display(arg) {
    console.log(arg.firstName + " " + arg.lastName);
}
display({ firstName: "Bob", lastName: "Marley", age: 33 }); // Affiche "Bob Marley". age est autorisé.
// display("Tony Stark"); // Erreur : ce texte n'a pas les propriétés firstName et lastName.
