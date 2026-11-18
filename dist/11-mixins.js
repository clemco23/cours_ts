"use strict";
// Un mixin est une fonction qui reçoit une classe et renvoie une classe enrichie.
// TBase garde le type précis de la classe reçue, avec ses propriétés et son constructeur.
// extends Constructor indique que Base doit être une classe qu'on peut instancier.
function ClassA(Base) {
    // La nouvelle classe hérite de Base et ajoute proprieteClassA à ses objets.
    return class extends Base {
        proprieteClassA = "ici la proprieteClassA";
    };
}
// Même principe pour ClassB, qui ajoute une autre propriété.
function ClassB(Base) {
    return class extends Base {
        proprieteClassB = "ici la proprieteClassB";
    };
}
// La classe de départ demande un nom quand on crée un objet.
class ExempleBase {
    nom;
    constructor(nom) {
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
