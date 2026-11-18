"use strict";
// Les accolades isolent cet exemple des interfaces Person et Employee.
{
    // Une classe abstraite sert de base à d'autres classes.
    class Person {
        // Cette méthode est déjà écrite et utilise le getName de l'objet courant.
        sayHello() {
            console.log("Hello " + this.getName());
        }
    }
    // const a = new Person(); // Erreur : on ne peut pas créer directement un objet Person.
    // Employee hérite de sayHello et fournit le code de getName.
    class Employee extends Person {
        getName() {
            return "Tony";
        }
    }
    const b = new Employee(); // Employee est une classe concrète, donc new fonctionne.
    b.getName(); // Renvoie "Tony".
    b.sayHello(); // Appelle getName et affiche « Hello Tony » dans la console.
}
