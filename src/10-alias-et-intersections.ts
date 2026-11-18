// Un alias donne un nom à un type qu'on veut réutiliser.
// Ici, ID est un autre nom pour number. On l'utilise pour indiquer le rôle de la valeur.
type ID = number;

const userID: ID = 2; // TypeScript accepte 2, car c'est un nombre.
// const autreID: ID = "2"; // Erreur : "2" entre guillemets est du texte.

// Un alias peut aussi décrire un objet. Un Point doit avoir deux coordonnées numériques.
type Point = {
    x: number;
    y: number;
};

const element: Point = {
    x: 9,
    y: 9
}; // Ce point a pour coordonnées (9, 9).

// Ce type exige une propriété color qui contient du texte.
type Colorful = {
    color: string;
};

// Ce type exige une propriété radius qui contient un nombre.
type Circle = {
    radius: number;
};

// & se lit « et ». ColorfulCircle doit respecter les deux types en même temps.
// On appelle ça une intersection. Ici, l'objet doit avoir color et radius.
type ColorfulCircle = Colorful & Circle;

const circleA: ColorfulCircle = {
    color: "blue",
    radius: 12
};
// const cercleIncomplet: ColorfulCircle = { color: "blue" }; // Erreur : il manque radius.
