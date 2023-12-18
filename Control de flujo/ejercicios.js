// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

let edad = 28;


if (edad < 18) {
    console.log ("No puedes votar");
} else {
    console.log("Ya puedes votar!");
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function esDivisible (numero) {
    if (numero / 7 == 0 && numero / 8 == 0) {
            console.log ("Verdadero");
    } else {
            console.log ("Falso");

            }

}

//Prueba




/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

function esDivisible (numero) {
    if (numero / 4 == 0 && numero / 9 == 0) {
            console.log ("Verdadero");
    } else {
            console.log ("Falso");

            }

}



/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

let pelicula = "accion";
switch (pelicula){
    case "drama" :
        console.log ("Your name")
        break;
    case "accion" :
        console.log ("John wick");
        break;
    case"comedia" :
        console.log ("Leo");
        break;
    case"romance" :
        console.log ("Orgullo y prejuicio");
    case"suspenso" :
        console.log ("Oppenheimer");
        break;
    case "terror" :
        console.log ("El exorcista");
        break;
        console.log ("otro genero");
        break;

    }


/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

let cajeroAtm (numero) {
 if (numero == 1) {
    console.log ("Retirar dinero");
} else if (numero == 2) {
    console.log("Transferencia");
} else if (numero == 3) {
    console.log("Deposito");
} else if (numero == 4) {
    console.log("Pago de servicios");
} else {
    console.log("Elije una opción del 1 al 4")
}
}



/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */
function convertirDivisas(cantidad, opcion) {
    var resultado = prompt("Ingrese un color");

    switch (opcion) {
        case 1:
            resultado = cantidad / 20;
            mostrarResultado("dólares estadounidenses", resultado);
            break;
        case 2:
            resultado = cantidad / 23;
            mostrarResultado("euros", resultado);
            break;
        case 3:
            resultado = cantidad * 0.12;
            mostrarResultado("yenes japoneses", resultado);
            break;
        case 4:
            resultado = cantidad / 24;
            mostrarResultado("libras esterlinas", resultado);
            break;
        case 5:
            resultado = cantidad / 19;
            mostrarResultado("francos suizos", resultado);
            break;
        case default:
            console.log(Elije una opción del 1 al 5.");
            break;
    }
}

    


