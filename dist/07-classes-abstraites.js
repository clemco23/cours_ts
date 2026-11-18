"use strict";
// Les accolades isolent cet exemple des interfaces Person et Employee.
{
    class Person {
        sayHello() {
            console.log("Hello " + this.getName());
        }
    }
    // const a = new Person(); // Erreur : Person est une classe abstraite.
    class Employee extends Person {
        getName() {
            return "Tony";
        }
    }
    const b = new Employee();
    b.getName();
    b.sayHello();
}
