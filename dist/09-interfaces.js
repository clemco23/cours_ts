"use strict";
// TypeScript vérifie que l'objet fournit les deux propriétés avec les bons types.
let personneA = {
    nom: "John",
    age: 30
};
// Cet objet est valide même s'il ne fournit pas d'adresse.
let personneB = {
    nom: "Jane",
    age: 25
};
const personneC = personneB.adresse; // Vaut undefined car l'objet n'a pas d'adresse.
let personA = { id: 1, name: "Tony", phone: "0123456789" }; // Ici, phone est fourni.
// implements demande à TypeScript de vérifier que Friend fournit ce que Person exige.
// Friend ajoute surname. Elle peut omettre phone, qui est facultatif.
class Friend {
    id = 0;
    name = "";
    surname = "";
}
const personB = new Friend(); // Crée un Friend avec id à 0 et les deux noms vides.
// Cet objet fournit id et name comme Person le demande, ainsi que job.
let employeeA = {
    id: 1,
    name: "Tony",
    job: "Web developer"
};
// La fonction reçoit un Employee et renvoie le même objet, toujours typé Employee.
function callEmployee(user) {
    return user;
}
let b = callEmployee(employeeA); // b contient le même objet que employeeA.
let numArr = [1, 2, 3];
numArr[0]; // Vaut 1. Le premier élément d'un tableau a l'index 0.
numArr[1]; // Vaut 2.
let strArr = { TS: 'TypeScript', JS: 'JavaScript' };
strArr["TS"]; // La clé "TS" donne la valeur "TypeScript".
strArr["JS"]; // La clé "JS" donne la valeur "JavaScript".
