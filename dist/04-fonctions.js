"use strict";
// Concaténation d'un texte et d'un nombre
function calculerSomme(a, b) {
    return a + b;
}
calculerSomme("10", 5); // "105"
// Deux paramètres obligatoires
function calculA(x, y) {
    return x + y;
}
calculA(2, 3); // 5
// Paramètre optionnel
function calculB(x, y) {
    if (y === undefined) {
        return x;
    }
    return x + y;
}
calculB(2); // 2
// Paramètre avec une valeur par défaut
function calculC(x, y = 1) {
    return x + y;
}
calculC(2, 3); // 5
calculC(2); // 3, car y vaut 1 par défaut.
// Paramètres de types différents
function calculD(x, y) {
    return x + y;
}
calculD("abc", 3); // "abc3"
// void indique qu'une fonction ne renvoie pas de valeur.
function maFonctionA() {
}
function maFonctionB() {
    return; // Termine la fonction sans renvoyer de valeur.
}
// function maFonctionC(): void {
//     return 7; // Erreur : la fonction est déclarée avec void.
// }
