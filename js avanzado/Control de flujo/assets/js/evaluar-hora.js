

/* Buenos dias 6 - 11
Buenas tardes 12 - 18
Buenas noches 19 - 23
Dejame dormir 0 - 5
 */

let hora = parseInt(prompt("Introduce la hora"))

if ((hora >= 6) && (hora < 11) ) 
    {document.write("Buenos días");}
else if ((hora >= 12) && (hora < 18))
    {document.write("buenas tardes");}
else if ((hora >= 19) && (hora < 23))
    {document.write("Buenas noches");}
else
    {document.write("Déjame dormir");}
