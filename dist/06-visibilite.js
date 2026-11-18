"use strict";
// Les accolades permettent de réutiliser les noms du chapitre précédent.
{
    class Animal {
        // public : accessible partout. protected : dans la classe et ses sous-classes.
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        move() {
            alert(this.name + " se déplace");
        }
    }
    class Dog extends Animal {
        makeSound() {
            // alert(this.name + " aboie !"); // Erreur : name est privé dans Animal.
            alert("Le chien aboie !");
        }
    }
    let pet = new Dog("Simba", 12);
    // pet.name = "Meddor"; // Erreur : name est privé et en lecture seule.
    pet.move();
    pet.makeSound();
}
