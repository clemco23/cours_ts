// Les accolades limitent les noms Animal et Dog à cet exemple.
{
    class Animal {
        // private réserve l'accès à Animal. protected l'autoriserait aussi dans Dog.
        // readonly permet de donner une valeur dans le constructeur. TypeScript interdit ensuite de la changer.
        private readonly name: string;
        age: number; // Sans mot-clé, age est public et accessible depuis l'extérieur.

        constructor(name: string, age: number) {
            this.name = name; // Cette première affectation est autorisée dans le constructeur.
            this.age = age;
        }

        // move est écrite dans Animal, donc elle peut lire la propriété privée name.
        move() {
            alert(this.name + " se déplace");
        }
    }

    class Dog extends Animal {
        makeSound() {
            // alert(this.name + " aboie !"); // Erreur : Dog ne peut pas lire le name privé d'Animal.
            alert("Le chien aboie !");
        }
    }

    let pet = new Dog("Simba", 12);
    // pet.name = "Meddor"; // Erreur : name est inaccessible ici et en lecture seule.
    pet.move(); // Affiche « Simba se déplace » en passant par la méthode publique d'Animal.
    pet.makeSound(); // Affiche « Le chien aboie ! ».
}
