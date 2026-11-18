// Un générique permet d'écrire un exemple qui fonctionne avec plusieurs types.
// T1 et T2 sont des noms pour les types que TypeScript connaîtra au moment de l'appel.

// Fonction générique
// Le premier argument a le type T1, le second le type T2.
// Le : T1 après les parenthèses indique que le résultat a le type du premier argument.
function identity<T1, T2>(arg: T1, arg2: T2): T1 {
    return arg; // arg2 est accepté et vérifié par TypeScript, mais il n'est pas utilisé ici.
}

// On choisit string pour T1 et number pour T2. Le résultat est "myString", de type string.
let outputS = identity<string, number>("myString", 5);
// identity("myString", 5) fonctionne aussi. TypeScript déduit les types à partir des arguments.

// Classe générique
// T fixe le type de dataA et U celui de dataB pour chaque objet créé.
class MaClasse<T, U> {
    dataA: T;
    dataB: U;

    // Le constructeur remplit les deux propriétés dès la création de l'objet.
    constructor(dataA: T, dataB: U) {
        this.dataA = dataA;
        this.dataB = dataB;
    }
}

// Ici, dataA vaut 999 et doit rester un nombre. dataB vaut "du texte" et doit rester du texte.
let value = new MaClasse<number, string>(999, "du texte");
// value.dataA = "999"; // Erreur : dataA attend un nombre.

// Interface générique
// Les deux objets ci-dessous ont les mêmes propriétés, avec des types choisis séparément.
interface MonInterface<T, U> {
    dataA: T;
    dataB: U;
}

let key1: MonInterface<number, string> = { dataA: 1, dataB: "Steve" }; // Nombre puis texte.
let key2: MonInterface<number, number> = { dataA: 2, dataB: 12345 }; // Deux nombres.

// Contrainte générique
interface PersonneAvecNom {
    firstName: string;
    lastName: string;
}

// T extends PersonneAvecNom exige au minimum un prénom et un nom, tous deux en texte.
// L'objet peut avoir d'autres propriétés. La fonction peut toujours lire les deux noms.
function display<T extends PersonneAvecNom>(arg: T): void {
    console.log(arg.firstName + " " + arg.lastName);
}

display({ firstName: "Bob", lastName: "Marley", age: 33 }); // Affiche "Bob Marley". age est autorisé.
// display("Tony Stark"); // Erreur : ce texte n'a pas les propriétés firstName et lastName.
