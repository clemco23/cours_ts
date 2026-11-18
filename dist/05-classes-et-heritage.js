"use strict";
class Animal {
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
let pet = new Animal("Rex", 5);
// Dog hérite des propriétés et des méthodes d'Animal.
class Dog extends Animal {
    makeSound() {
        alert(this.name + " aboie !");
    }
}
let pet2 = new Dog("Simba", 12);
pet2.move();
pet2.makeSound();
