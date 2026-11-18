// Une interface décrit les propriétés attendues d'un objet.
interface Personne {
    nom: string; // Le nom est obligatoire et doit être du texte.
    age: number; // L'âge est obligatoire et doit être un nombre.
}

// TypeScript vérifie que l'objet fournit les deux propriétés avec les bons types.
let personneA: Personne = {
    nom: "John",
    age: 30
};

interface Personne2 {
    nom: string;
    age: number;
    adresse?: string; // Le ? permet d'omettre l'adresse. Si elle est donnée, c'est du texte.
}

// Cet objet est valide même s'il ne fournit pas d'adresse.
let personneB: Personne2 = {
    nom: "Jane",
    age: 25
};

const personneC = personneB.adresse; // Vaut undefined car l'objet n'a pas d'adresse.

// Dans cette interface, id et name sont obligatoires. phone est facultatif.
interface Person {
    id: number;
    name: string;
    phone?: string;
}

let personA: Person = { id: 1, name: "Tony", phone: "0123456789" }; // Ici, phone est fourni.

// implements demande à TypeScript de vérifier que Friend fournit ce que Person exige.
// Friend ajoute surname. Elle peut omettre phone, qui est facultatif.
class Friend implements Person {
    id: number = 0;
    name: string = "";
    surname: string = "";
}

const personB = new Friend(); // Crée un Friend avec id à 0 et les deux noms vides.

// extends reprend les propriétés de Person et ajoute une propriété job obligatoire.
interface Employee extends Person {
    job: string;
}

// Cet objet fournit id et name comme Person le demande, ainsi que job.
let employeeA: Employee = {
    id: 1,
    name: "Tony",
    job: "Web developer"
};

// La fonction reçoit un Employee et renvoie le même objet, toujours typé Employee.
function callEmployee(user: Employee): Employee {
    return user;
}

let b = callEmployee(employeeA); // b contient le même objet que employeeA.

// Les crochets décrivent comment lire une valeur. Ici, un index numérique donne un nombre.
interface NumList {
    [index: number]: number;
}

let numArr: NumList = [1, 2, 3];
numArr[0]; // Vaut 1. Le premier élément d'un tableau a l'index 0.
numArr[1]; // Vaut 2.

// Même principe avec des clés en texte. Chaque valeur associée est aussi du texte.
interface IStringList {
    [index: string]: string;
}

let strArr: IStringList = { TS: 'TypeScript', JS: 'JavaScript' };
strArr["TS"]; // La clé "TS" donne la valeur "TypeScript".
strArr["JS"]; // La clé "JS" donne la valeur "JavaScript".
