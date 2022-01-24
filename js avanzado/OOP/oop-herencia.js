class Pokemon{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

atacar() {
    return console.log(`${this.nombre} está atacando`)
}
}


class Pikachu extends Pokemon {
    constructor(nombre, tipo, edad){
        super(nombre, tipo); 
        this.edad = edad;
    }
    evolucionar(){
        return console.log (`${this.nombre} está evolucionando`)
    }
}

const Pikachu1 = new Pikachu ("Juan", "Eléctrico");
console.log(Pikachu1);

const Pokemon1 = new Pokemon ("Charmander", "Fuego")
Pokemon1.atacar()