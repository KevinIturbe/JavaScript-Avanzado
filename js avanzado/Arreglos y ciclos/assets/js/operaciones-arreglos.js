/* let numeros = [1,2,3,4,5,7,8,9]

numeros.forEach(function(pizza) 
{document.write(pizza + "<br>")});

let numeros2 = numeros.map(function(elemento)
{return elemento;});

document.write("<br>" + numeros2)
//nos permite crear un arreglo de otro arreglo 

let numerosPares = numeros.filter((elemento) => {return 
    elemento % 2 == 0;
});

document.write("<br>" + numerosPares + "<br>");

let frutas = ["mango", "uva" ,"piña", "mandarina"]

let frutasFiltro = frutas.filter((fruta) => {
  /*   if (fruta.includes("i") == true){
        return true;
    } */
   /*  return fruta.includes("m");
});
 */
/* document.write( numeros.sort)
 */ 


let arreglo = [1 , 2 , 4 , 5, 4, 7, 8, 55, 4, 14, 56, 23, 26, 25, 86, 47, 63, 12, 20 ];
let total =;

for(let i = 0; i < arreglo.length ; i++ )

{total += arreglo[i];}

document.write(total + "de suma")

let promedio = total/arreglo.length;

document.write(promedio);