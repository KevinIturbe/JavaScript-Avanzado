//código síncrono

let variableSincrona;
variableSincrona = 10 * 3;
console.log(variableSincrona);


// Código asincrono

let variableAsincrona;
//lo que ejecutará va dentro de la función, lo segundo es el tiempo que tardará, es como un timer
setTimeout(() => {variableAsincrona =10 * 3;

}, 2000);

console.log(variableAsincrona);