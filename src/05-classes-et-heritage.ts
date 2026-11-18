// Une classe décrit les propriétés et les actions d'un objet.
class Animal {
    name: string; // Le nom de chaque animal est du texte.
    age: number; // Son âge est un nombre.

    // Le constructeur s'exécute quand on crée un objet avec new Animal(...).
    // this représente l'animal qu'on est en train de créer.
    constructor(name: string, age: number) {
        this.name = name; // On range le paramètre name dans la propriété de l'objet.
        this.age = age;
    }

    // Une méthode est une fonction définie dans la classe. Celle-ci ouvre une alerte.
    move() {
        alert(this.name + " se déplace");
    }
}

// Crée un objet Animal dont le nom est "Rex" et l'âge est 5.
let pet = new Animal("Rex", 5);

// extends donne à Dog les propriétés et les méthodes d'Animal.
class Dog extends Animal {
    // Dog ajoute sa propre méthode. this.name est le nom de ce chien.
    makeSound() {
        alert(this.name + " aboie !");
    }
}

// Dog utilise le constructeur d'Animal, puisque Dog ne définit pas le sien.
let pet2 = new Dog("Simba", 12);
pet2.move(); // Méthode héritée d'Animal. Affiche « Simba se déplace ».
pet2.makeSound(); // Méthode de Dog. Affiche « Simba aboie ! ».
