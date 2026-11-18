// Un tuple donne un type à chaque position. Ici, x[0] est du texte et x[1] est un nombre.
let x: [string, number];
x = ["hello", 10]; // x[0] vaut "hello" et x[1] vaut 10.

// x = [10, "hello"]; // Erreur : les types sont dans le mauvais ordre.
// x[2]; // Erreur : l'index commence à 0, donc x[2] serait le troisième élément.
