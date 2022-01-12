//El flujo es el orden en que se van ejecutando las declaraciones que escribimos 
//Suelen ejecutarse de arriba hacia abajo 

/* let miVariable = 10;
console.log(miVariable)
 */

//Estructuras de control de flujo

//If modifica el orden en que se ejecutan las instrucciones del sistema 

/* let edad = 17;
let tienesINE = false 

if(edad >= 18 || tienesINE == true)
{document.write ("Puedes entrar")}
else
{document.write("No puedes entrar")}
 */
/* Operador ternario  

es una forma condensada de if else

(condición a evaluar) ? se ejecuta si es verdadero : se ejecuta si es falso*/

/* let edad1 = 25;


(edad1 >= 18) 
    ? document.write("mayor de edad") 
    : document.write("menor de edad");
 */
/* Switch -case
switch (variable a evaluar)
    {case valor:   }

*/
let día = 0.5

switch (día)
{ 
    case 0 :
    document.write("domingo")
    break;

    case 1 : 
    document.write("lunes")
    break;

    case 2 :
    document.write("martes")
    break;
    
    /* etc */

    default:  document.write("No es un día")
    break;
/* Nos muestra un mensaje en caso de que se incluya un valor no programado */

}

let cuponDescuento;
let descuento;



switch(cuponDescuento)
{   case "Bronce":
    descuento - 5;
    break;

    case "Plata":
        descuento = 10;
        break;

    case "oro":
        descuento - 15;
        break;

    default: document.write("Cupón erronero")
    break;
}