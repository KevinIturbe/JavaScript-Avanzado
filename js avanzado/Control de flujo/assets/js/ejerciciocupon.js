let precio = parseInt(prompt("introduzca precio"));;
let cupon = parseInt(prompt("introduzca cupon"));



switch(cuponDescuento)
{   case "Bronce":
    descuento = .05;
    break;

    case "Plata":
        descuento = .10;
        break;

    case "oro":
        descuento = .15;
        break;

    default: document.write("Cupón erronero")
    break;
}