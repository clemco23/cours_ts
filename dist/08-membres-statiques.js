"use strict";
class MyClass {
    // static attache x à la classe elle-même. Sa valeur de départ est 0.
    static x = 0;
}
// On lit x directement avec le nom de la classe, sans créer d'objet avec new.
MyClass.x; // Vaut 0.
