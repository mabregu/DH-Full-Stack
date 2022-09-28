class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }

    // Getters
    obtenerNombre() {
        return "El nombre del animal " + this.nombre;
    }

    obtenerEspecie() {
        return "Esta es la especie del animal " + this.especie;
    }

    // Setters
    establecerNombre(nombre) {
        this.nombre = nombre;

        return this.nombre;
    }

    establecerEspecie(especie) {
        this.especie = especie;

        return this.especie;
    }
}

module.exports = Animal;