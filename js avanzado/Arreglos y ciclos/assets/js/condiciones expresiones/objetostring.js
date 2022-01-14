let cadena1 = "hola";

let cadena2 = new String("adios")


console.log(cadena2.toLowerCase().includes("a"))

/* cohersion - JavaScript convierte en automático un tipo de dato en otro */
let palabra = "Hola Mundo!";
let arreglo = palabra.split("o");


function invertirPalabra(cadena)
{let arreglo = cadena.split("");// conviertiendo cadena en un arreglo
arreglo.reverse(); //invirtiendo arreglo
    let cadenaInvertida = arreglo.join("");

    return console.log(cadenainvertida); 

}

let datostring = "Esto es un string";//Aquí estoy declarando una variable de tipo string
let datoArreglo =  cadenaArreglo.split(""); //Aquí le estoy diciendo que una variable se separará con el método split

function ejercicio(cadenaArreglo)
    {let datoArreglo = cadenaArreglo.split("");
    datoArreglo.reverse(); 

    return document.write("Dato de cadena invertida")