"use strict";
class Robot {
    constructor(name, apellido) {
        this.name = name;
        this.apellido = apellido;
    }
    saludar() {
        return `Hola, soy ${this.name} ${this.apellido}!`;
    }
}
const robot = new Robot("R2D2", "Contreras");
robot.saludar();
