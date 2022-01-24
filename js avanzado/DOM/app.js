let variable = document.getElementById("titulo");
titulo.textContent = "Titulo escrito desde JS"

let $titulo = document.querySelector("#titulo")
$titulo.textContent = "titulo escrito desde JS";

/* let $parrafo = document.querySelector("p");
console.log($parrafo.textContent);

let parrafos = document.querySelectorAll("p");
console.log($parrafos[1].textContent); */

let subtitulo = document.createElement("h3");
subtitulo.textContent = "Holis";
$titulo.insertAdjacentElement("afterend", subtitulo);

//esto esta agregando un elemento dentro del body, después del ultimo hijo
/* 
let $contenido = document.querySelector(#contenido)
console.log($contenido.textContent)

let contenidoParrafo = document.createElement("p");
contenidoParrafo.textContent = " Contenido de mi nuevo parrafo";
$contenido.appendChild(contenidoParrafo) */