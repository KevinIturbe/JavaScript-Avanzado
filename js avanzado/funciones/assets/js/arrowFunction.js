/* Function sumar (numero1, numero2)
{return numero1 + numero2;}
 */
const sumar = (numero1, numero2) => 
{return numero1 + numero2;}


let numero1 = parseInt(prompt("numero1"));
let numero2  = parseInt(prompt("numero2"));
let sumaNumeros = sumar(numero1, numero2);


//Template string 

document.write(`La suma de ${numero1} y ${numero2} es ${sumaNumeros}`);