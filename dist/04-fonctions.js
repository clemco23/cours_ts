"use strict";
// return donne un résultat à celui qui a appelé la fonction.
// Pour afficher ce résultat dans la console, on peut écrire console.log(calculerSomme("10", 5)).
// Entre les parenthèses, a: string et b: number donnent le type des paramètres.
// Après les parenthèses, : string annonce le type de la valeur renvoyée par return.
function calculerSomme(a, b) {
    // Comme a est du texte, + convertit b en texte et les colle. C'est la concaténation.
    return a + b;
}
calculerSomme("10", 5); // Renvoie le texte "105".
// Les deux paramètres sont obligatoires et sont des nombres. Ici, + fait une addition.
function calculA(x, y) {
    return x + y;
}
calculA(2, 3); // x reçoit 2, y reçoit 3. La fonction renvoie 5.
// Le ? dans y?: number permet d'appeler la fonction sans donner y.
function calculB(x, y) {
    // Quand y est omis, il vaut undefined. On renvoie alors x et la fonction s'arrête.
    if (y === undefined) {
        return x;
    }
    return x + y; // Ici, on sait que y est un nombre.
}
calculB(2); // y est omis, donc la fonction renvoie 2.
// Le = 1 donne une valeur à y quand on l'omet. TypeScript déduit que y est un number.
function calculC(x, y = 1) {
    return x + y;
}
calculC(2, 3); // y reçoit 3, donc la fonction renvoie 5.
calculC(2); // 3, car y vaut 1 par défaut.
// Même principe que calculerSomme, avec "abc" comme premier argument.
function calculD(x, y) {
    return x + y;
}
calculD("abc", 3); // Renvoie le texte "abc3".
// void indique qu'on n'attend aucune valeur en retour. Ici, la fonction est vide.
function maFonctionA() {
}
// On peut aussi utiliser return tout seul pour arrêter une fonction void.
function maFonctionB() {
    return;
}
// function maFonctionC(): void {
//     return 7; // Erreur : cette fonction déclarée void essaie de renvoyer un nombre.
// }
