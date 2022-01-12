/* Funciones 
Es un bloque de código reutilizable 
puede o no tener parametros de entrada.
Puede devolver o no un valor  */

function sumar(numero1, numero2)
{//operaciones o código a ejecutar
    //el return debe ser la última instrucción de la función 
    return numero1 + numero2;
}

let numero1 = parseInt(prompt("numero1"));
let numero2  = parseInt(prompt("numero2"));
let sumaNumeros = sumar(numero1, numero2);


//Template string 

document.write(`La suma de ${numero1} y ${numero2} es ${sumaNumeros}`);

