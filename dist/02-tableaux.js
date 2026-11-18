"use strict";
// string[] se lit « tableau de textes ». Chaque valeur doit être un string.
let Liste = ["Bonjour", "Salut", "Hello"];
// Array<string> est une autre façon d'écrire exactement le même type.
let Liste2 = ["Bonjour", "Salut", "Hello"];
// number[] et Array<number> veulent tous les deux dire « tableau de nombres ».
let Liste3 = [1, 2, 3, 4, 5];
let Liste4 = [1, 2, 3, 4, 5];
// Le symbole | se lit « ou ». Chaque élément peut donc être un texte ou un nombre.
// Les parenthèses font porter [] sur l'ensemble du type string | number.
let Liste5 = ["Bonjour", 1, "Salut", 2, "Hello", 3];
// Array<string | number> exprime la même règle.
let Liste6 = ["Bonjour", 1, "Salut", 2, "Hello", 3];
// Deux autres tableaux de nombres, avec les deux écritures.
let listeA = [1, 2, 3];
let listeB = [4, 5, 6];
// Deux autres tableaux de textes. Une lettre entre guillemets est aussi un string.
let listeC = ["a", "b", "c"];
let listeD = ["d", "e", "f"];
// Ici, les valeurs n'ont pas besoin d'alterner. 3 et 4 peuvent se suivre.
let listeE = ["Pomme", 2, "Orange", 3, 4, "Banane"];
let listeF = ["Pomme", 2, "Orange", 3, 4, "Banane"];
