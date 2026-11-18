// L'interface décrit ce que chaque objet Contact doit contenir.
interface Contact {
    id: number;
    name: string;
    status: ContactStatus; // Le statut doit être un des membres de l'enum ci-dessous.
}

// Un enum regroupe des valeurs sous un même nom. Ici, les trois valeurs sont des textes.
enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    Busy = "occupe"
}

const contact1: Contact = {
    id: 1,
    name: "Tony",
    status: ContactStatus.Active // Active est le nom du membre. Sa valeur est "active".
};

// On utilise un membre de l'enum pour changer de statut.
// contact1.status = ContactStatus.Busy; // Le statut vaudrait alors "occupe".
// contact1.status = "active"; // Erreur : il faut utiliser ContactStatus.Active.

console.log(contact1.status); // Affiche "active" dans la console.
