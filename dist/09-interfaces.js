"use strict";
let personneA = {
    nom: "John",
    age: 30
};
let personneB = {
    nom: "Jane",
    age: 25
};
const personneC = personneB.adresse; // undefined
let personA = { id: 1, name: "Tony", phone: "0123456789" };
// Une classe peut implémenter une interface.
class Friend {
    id = 0;
    name = "";
    surname = "";
}
const personB = new Friend();
let employeeA = {
    id: 1,
    name: "Tony",
    job: "Web developer"
};
// Une interface peut servir à typer les paramètres et le résultat d'une fonction.
function callEmployee(user) {
    return user;
}
let b = callEmployee(employeeA);
let numArr = [1, 2, 3];
numArr[0];
numArr[1];
let strArr = { TS: 'TypeScript', JS: 'JavaScript' };
strArr["TS"];
strArr["JS"];
