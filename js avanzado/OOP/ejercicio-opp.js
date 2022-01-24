class Carro{
    constructor(marca, color, modelo, velocidad, numeroDePuertas){
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.numeroDePuertas = numeroDePuertas;

    }

    acelerar(){
        return this.velocidad = this.velocidad + 1;
    }

    frenar(){
        return this.velocidad = 0;
    }

    reversa(){
        return this.velocidad = this.velocidad - 1;
    }

    toString(){
        return document.write(`Marca: ${this.marca} Color: ${this.color} Modelo: ${this.modelo} Velocidad: ${this.velocidad} Numero de puertas: ${this.numeroDePuertas}<br>);
    }
}

const tsuru = new Carro("mi trokita", "rojo", "tsuru", 0, 4);
console.log(tsuru);

tsuru.toString();
tsuru.acelerar();
tsuru.toString();
tsuru.frenar();
tsuru.toString();
tsuru.reversa();
tsuru.toString();