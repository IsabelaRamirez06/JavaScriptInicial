
let seleccionarCantidad;
let total = 0;
let seleccionarProductos = "";

alert("Bienvenido a Fashion Lover Accesorios Para Mujer")
let seleccion = prompt("¿Deseas hacer algún pedido? ¿SI o NO?")


while (seleccion.toUpperCase() != "SI" && seleccion.toUpperCase() != "NO") {
    alert("Por favor ingresa SI o NO")
    seleccion = prompt ("¿Desea hacer algún pedido? ¿SI o NO?")
    
}

showMenu();


function cantidad(cantidad, precio) {
  return cantidad * precio
}

function showMenu() {
  if(seleccion.toUpperCase() == "SI"){
    seleccionarProductos = Number(prompt("Seleccione el número del producto que desea comprar:\n 1. Collares $3000\n 2. Aretas $1500\n 3. Earcuffs $5000\n 4. Anillos $6000\n"))
        
  } else if (seleccion.toUpperCase() == "NO"){
      alert("¡Gracias por Visitarnos, Vuelva Pronto!")
  }
  while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
       case 1:
        seleccionarCantidad = Number(prompt("El producto seleccionado es Collares, indique la cantidad"));
        total += cantidad(seleccionarCantidad, 3000);
        seleccionarProductos = "";
        break;
      case 2:
        seleccionarCantidad = Number(prompt("El producto seleccionado es Aretas, indique la cantidad"));
        total += cantidad(seleccionarCantidad, 1500);
        seleccionarProductos = "";
        break;
      case 3:
        seleccionarCantidad = Number(prompt("El producto seleccionado es Earcuffs, indique la cantidad"));
        total += cantidad(seleccionarCantidad, 5000);
        seleccionarProductos = "";
        break;
      case 4:
        seleccionarCantidad = Number(prompt("El producto seleccionado es Anillos, indique la cantidad"));
        total += cantidad(seleccionarCantidad, 6000);
        seleccionarProductos = "";
        break;

      default:
        alert("Este producto aún no esta disponible")
        break;
    }
    confirmFinish();
  }
}

function confirmFinish() {
  seleccion = prompt("¿Deseas comprar algo más?")
  if(seleccion.toUpperCase() == "SI") {
    showMenu();
  }
  else if (seleccion.toUpperCase() == "NO"){
    alert("¡Gracias por tu compra!")
  }
  alert("El total de tu compra es de: " + total)
}