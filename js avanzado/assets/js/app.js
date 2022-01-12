let titulo = document.getElementById("titulo");

console.log(titulo);
titulo.textContent = "Esto está escrito desde JavaScript";

let parrafos = document.getElementsByTagName("p");
console.log(parrafos);

/* parrafos[0].textContent ="Parrafos escritos desde JavaScript"; */

let email = document.getElementById("email");
let password = document.getElementById("password")

function getInformation()
{
    console.log(email.value);
    console.log(password.value);
}