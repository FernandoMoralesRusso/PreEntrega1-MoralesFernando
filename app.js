/*
1 - Mostrar listado de combustibles disponibles con su valor por lt.
2 - Determinar si la cantidad comprada es apta para el descuento.
3 - Ofrecer al Usuario agregar multiples productos y acumularlos.
3 - Mostrar el total al Usuario, con el descuento incluido si fue apto.
4 - Ofrecer pago sin interes hasta en 3 cuotas o pago de contado.
5 - Mostrar costo total en efectivo o costo y cantidad de cuotas a pagar.
*/
let producto = " ";
let agregar = " ";
let costo = 0;
let costoTotal = 0;
let camtidad = 0;
let cantidadTotal = 0;
let precio = 0;
let csi = " ";
let cuota = " ";
let costoMes = 0;
let cuotaValida = true;

// Funcion : Litros * Costo
function multiplicacion(unidad, costo) {
    return unidad * costo
}

// Función para guardar la cantidad total de productos agregadors
function acumulador(cantidad) {
    return cantidadTotal = cantidad + cantidadTotal
}

// Función Descuento 10%
function descuento(cantidadTotal) {

    if ((cantidadTotal >= 30)) {
        costoTotal = costoTotal * 0.9
        alert("El monto a pagar con descuento es de $" + costoTotal)
    }
    else {
        alert("El monto a pagar es de $" + costoTotal)
    }
}

//Ciclo para acumular distintos cargas en un mismo pago
while (agregar != "no") {

    producto = prompt("Indique cual combustible desea vender: \n \
     1) NaftaSuper $270 xLt \n \
     2) NaftaPremium $310 xLt \n \
     3) DieselSuper $200 xLt\n \
     4) DieselPremium $230 xLt")


    cantidad = parseInt(prompt("Escriba la cantidad de litros a vender \n \
    Venta superior a 30Lt posee descuento de 10%"))
    if (cantidad > 0) {
        //Calculadora de costos en función del combustible seleccionado
        switch (producto) {
            case "1":
                precio = multiplicacion(cantidad, 270)
                acumulador(cantidad)
                break
            case "2":
                precio = multiplicacion(cantidad, 310)
                acumulador(cantidad)
                break
            case "3":
                precio = multiplicacion(cantidad, 200)
                acumulador(cantidad)
                break
            case "4":
                precio = multiplicacion(cantidad, 230)
                acumulador(cantidad)
                break
            default:
                alert("Seleccione Numero de opcion valido")
                break
        }
        //Acumulador del costo total de todos los productos seleccionados
        costoTotal = precio + costoTotal
        agregar = prompt("¿Desea realizar otra recarga? (Escriba 'si' para agregar producto' y 'no' para finalizar compra")
    }
    else {
        alert("Escriba una cantidad mayor a 0")
    }
}

//Función para determinar si se aplica descuento
descuento(cantidadTotal);

//Seleccion de pago a meses sin interes
csi = prompt("Desea pagar en hasta 3 cuotas SIN INTERES? (si-no)")
if (csi == "si") {
    // Validacion de cantidad de cuotas
    while (cuotaValida) {
        cuota = prompt("Escoja en cuantas cuotas desea pagar (1-3)")
        if ((cuota > 0) && (cuota <= 3)) {
            costoMes = costoTotal / cuota
            cuotaValida = false
            alert("El monto a pagar es $" + costoMes + " durante " + cuota + " meses")
        }
        else {
            alert("Escriba un numero válido de cuotas")
        }
    }
}
else {
    alert("El monto a pagar es: $" + costoTotal)
}