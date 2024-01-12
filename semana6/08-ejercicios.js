//IF
/*Una tienda de ropa tiene unas ofertas
En caso de que el cliente lleve más ó igual que 100 dólares recibe
un descuento de 5 dólares
En caso el cliente lleve más de 150 dólares recibe
un descuento de 20 dólares
En caso el cliente lleve más de 300 dólares recibe
un descuento de 60 dólares
calcule el total más el IGV, que no esta incluido en el precio
*/

function calcularTotal(montoALlevar) {
 
  console.log(montoALlevar);
  console.log(typeof montoALlevar);
  //parseInt, busca convertir un valor a number, en enteros
  //parseFloat, busca convertir un valor a number, con decimales
  let montoNumerico = parseFloat(montoALlevar);
  console.log("monto numerico ", montoNumerico);
  console.log("tipo monto numerico ", typeof montoNumerico);
  // let montoALlevar = 50;
  //variable a algo que tengo que tener en cuenta para resolverlo
  let descuento = 0;
  let IGV = 1.18;
  //si algo cumple un valor el if se va aplicar inmediatamente
  if (montoNumerico > 300) {
    descuento = 60;
  } else if (montoNumerico > 150) {
    descuento = 20;
  } else if (montoNumerico >= 100) {
    descuento = 5;
  } else {
    console.log("no hay descuento");
  }

  let total = (montoNumerico - descuento) * IGV;
  console.log(`El total es: ${total} con un descuento de ${descuento}`);
}

//1.planteenlo, escriban el código, cambien las condiciones si desean
//2. planteenlo dentro de una función, que la función reciba como parámetro el montoALlevar

let obtenerMonto = prompt("Cuanto llevará el/la cliente?");
calcularTotal(obtenerMonto)