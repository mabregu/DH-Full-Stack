const Animal = require('./Animal');

class Perro extends Animal {
    constructor(nombre, especie, raza) {
        super(nombre, especie);
        this.raza = raza;
    }

    obtenerRaza() {
        return "la raza del perro " + this.raza;
    }
}

module.exports = Perro;