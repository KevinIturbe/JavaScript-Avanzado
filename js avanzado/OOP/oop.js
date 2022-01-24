class Animal { 
    constructor (nombre, especie){
        this.nombre = nombre 
        this.especie = especie;
    }

presentarse(){
    document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre} <br>`);
}    

// Getters y setters se usan con el propósito para leer o modificar el atributo
get getNombre(){

    return this.nombre;
}
set setNombre(nombre){
    this.nombre = nombre;
}

get getEspecie(){
    return this.especie
}

get setEspecie(especie){
    this.especie = especie;
}



    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.espacie} <br>`
        return mensaje;
    }


    //Un metodo estatico pertenece a la clase pero no se hereda a los objetos
    static saludar(){
        return console.log(`Hola, soy un método estático`);
    }
}

const Animal1 = new Animal ("Scooby, Perro"); //Creamos un objeto 
console.log(Animal1)

const Animal2 = new Animal ("René, Gato"); 
console.log(Animal2)

Animal1.presentarse();
Animal2.presentarse();

console.log(Animal,nombre);

Animal1.nombre = "Scrappy";
console.log(Animal1.nombre);
console.log(Animal1);
Animal1.cambiarNombre("oddie");

//getters y setters
//get y obtener el calor de una variabla
// set fija o cambia el valor de un atributo 
//en JS se utilizan como atributos

console.log(Animal1.getNombre);
Animal1.getNombre("Manchas");