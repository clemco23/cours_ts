// Un mixin est une fonction qui reçoit une classe et renvoie une classe enrichie.

// new (...args: any[]) => T décrit une classe qu'on peut appeler avec new.
// ...args permet un nombre variable d'arguments. any[] laisse ces arguments libres.
// T est le type de l'objet créé. Avec T = {}, on n'exige aucune propriété précise par défaut.
type Constructor<T = {}> = new (...args: any[]) => T;

// TBase garde le type précis de la classe reçue, avec ses propriétés et son constructeur.
// extends Constructor indique que Base doit être une classe qu'on peut instancier.
function ClassA<TBase extends Constructor>(Base: TBase) {
    // La nouvelle classe hérite de Base et ajoute proprieteClassA à ses objets.
    return class extends Base {
        proprieteClassA: string = "ici la proprieteClassA";
    };
}

// Même principe pour ClassB, qui ajoute une autre propriété.
function ClassB<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        proprieteClassB: string = "ici la proprieteClassB";
    };
}

// La classe de départ demande un nom quand on crée un objet.
class ExempleBase {
    nom: string;

    constructor(nom: string) {
        this.nom = nom;
    }
}

// On passe la classe elle-même à ClassA. La classe obtenue garde nom et ajoute la propriété A.
const ClasseAvecA = ClassA(ExempleBase);
// En passant cette nouvelle classe à ClassB, on y ajoute aussi la propriété B.
const ClasseAvecAB = ClassB(ClasseAvecA);

// On crée l'objet à la fin. Le constructeur attend toujours un nom de type string.
const exempleMixins = new ClasseAvecAB("Démo");
// const exempleInvalide = new ClasseAvecAB(123); // Erreur : le nom doit être du texte.

console.log(exempleMixins.nom); // "Démo", hérité d'ExempleBase.
console.log(exempleMixins.proprieteClassA); // "ici la proprieteClassA", ajouté par ClassA.
console.log(exempleMixins.proprieteClassB); // "ici la proprieteClassB", ajouté par ClassB.
