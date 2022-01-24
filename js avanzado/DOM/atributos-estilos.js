let $titulo = document.querySelector("#titulo");
let $texto = document.querySelector(".texto");

$texto.id = "texto";
/* $texto.style = "color: red"; */

$texto.className = "bg-purple";
//la agrega y remplaza las anteriores

$texto.classList.add("text-center");
$texto.classList.remove("bg-purple");