class Robot {
    private name : string;
    private apellido: string;

    constructor(name: string, apellido:string)  {
        this.name = name;
        this.apellido = apellido;
    }


    saludar() : string {
        return `Hola, soy ${this.name} ${this.apellido}!`
    }

}


const robot = new Robot("R2D2", "Contreras")

robot.saludar()