// string[] se lit « tableau de textes ». Chaque valeur doit être un string.
let Liste: string[] = ["Bonjour", "Salut", "Hello"];
// Array<string> est une autre façon d'écrire exactement le même type.
let Liste2: Array<string> = ["Bonjour", "Salut", "Hello"];

// number[] et Array<number> veulent tous les deux dire « tableau de nombres ».
let Liste3: number[] = [1, 2, 3, 4, 5];
let Liste4: Array<number> = [1, 2, 3, 4, 5];

// Le symbole | se lit « ou ». Chaque élément peut donc être un texte ou un nombre.
// Les parenthèses font porter [] sur l'ensemble du type string | number.
let Liste5: (string | number)[] = ["Bonjour", 1, "Salut", 2, "Hello", 3];
// Array<string | number> exprime la même règle.
let Liste6: Array<string | number> = ["Bonjour", 1, "Salut", 2, "Hello", 3];

// Deux autres tableaux de nombres, avec les deux écritures.
let listeA: number[] = [1, 2, 3];
let listeB: Array<number> = [4, 5, 6];

// Deux autres tableaux de textes. Une lettre entre guillemets est aussi un string.
let listeC: string[] = ["a", "b", "c"];
let listeD: Array<string> = ["d", "e", "f"];

// Ici, les valeurs n'ont pas besoin d'alterner. 3 et 4 peuvent se suivre.
let listeE: (string | number)[] = ["Pomme", 2, "Orange", 3, 4, "Banane"];
let listeF: Array<string | number> = ["Pomme", 2, "Orange", 3, 4, "Banane"];
