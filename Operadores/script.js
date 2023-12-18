/*Operador
Es un signo que especifica que debe efectuar una determinada operación
*/

/*Operadores aritmeticos (+,-,*-/,%,++,--) Operadores de asignación (=)
Operadores lógicos (&&, ll, !)

Operadores de comparación (==, ===,!=, !== <,>,<=,>=)
Operadores de cadena (toLowerCase, trim, toString, concat, +)
*/

/*
Operadores aritméticos

(+): suma, se utiliza para sumar dos números
(-) : resta, se utiliza para restar un numero de otro
(+) multiplicación, se utiliza para multiplicar dos números.
(/): división, se utiliza para dividir un número entre otro
(%): residuo, Se utilizara para obtener el resto de una división
(++): incremento, aumenta de uno en uno la cantidad o el numero.
(--): decremento, disminuye de uno en uno la cantidad o el número.


*/

let numero1 = 10;
let numero2 = 8;

suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 + numero2;
division = numero1 / numero2;
residuo = numero1 % numero2;
incremento = numero1;
incremento ++;
decremento = numero2;
decremento --;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(residuo);
console.log(incremento);
console.log(decremento);

let precioReal = 1000;
let porcentajeDescuento =  20;

let cantidadDescuento = (precioReal * porcentajeDescuento)/1000;
let precioConDescuento = precioReal - cantidadDescuento;

console.log ("Precio Real:$" + precioReal);
console.log("Porcentaje de descuento: " + porcentajeDescuento + "%"); 
console.log("cantidadDescuento");
console.log("Precio con descuento:$" + precioConDescuento);

/* Operadores de asignación
()=: Este operador no compara, lo que hace es asignar */

//let frutas = manzana;

/*Operadores de comparación

(==): Igualdad comparar si nuestros valores son iguales 

*/

let numero3 = 10;
let texto = "10";

console.log(numero3 == texto);

/*(===): Igualdad estricta, compara si los valores son iguales y el tipo de dato */

let numero4 = 10;
let texto1 = "10";

console.log(numero4 === texto1);

/*(!=): Desigualdad o distinto este operador verifica si dos valores no son iguales y de ser necesario realiza la conversión */

let precioCaja = 1499;
let precioMaximo = 1500;

if (precioCaja != precioMaximo) {

console.log("El precio del producto no es igual al precio maximo");

    
} else { 
    console.log("El precio del producto es igual al precio maximo permitido");

}

/* (!===)Desigualdad estrica este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el mismo tipo y valor*/

let numero5 = 10;
let numero6 = "10";

if (numero5 !== Number(numero6)) {
    console.log("Son diferentes");
} else {
    console.log ("Los valores son iguales");
}

/* (!===) Desogiañdad estricta este operador verifica si dos valores no son iguales, pero a diferencia de (!==) en este caso ambos valores deben tener el mismo tipo y valor*/
let numero7 = 41;
let numero8 = "50";

if (numero7 !=== numero8) {
    console.log(los valores son diferentes)
} else {
    console.log("Los valores son iguales");
}


//(>): Mayor que basicamente nos indica si un valor es mayor que otro

let puntuacionfinal = 85;
let puntuacionRequerida = 102;


console.log(puntuacionfinal > puntuacionRequerida);


//(<): Menor que nos indica si un valor es menor que otro

let anios = 20;
let edadLimite = 30;

console.log(anios < edadLimite);

//(>=) Mayor o igual que y nos dice si un valor es mayor o igual a otro

let edad = 18;
let edadNecesaria = 18;

console.log(edad <= edadNecesaria);

//(<=)Menor o igual que y nos indica si un valor es menor o igual a otro

let temperatura = 14;
let temperaturaMaxima = 21;

console.log(temperatura <= temperaturaMaxima);

ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro

let edad = 40;

ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no


//Operadores lógicos
/*(&&) AND se utiliza cuando las dos condiciones deben cummplirse
*/

let (mayoriaDeEdad <= 18 && tieneIdentificacion) {
    console.log("Puedes rentar el salón"); 
}else {
    console.log ("No lo puedes rentar");
}

///(||) OR se utiliza cuadno se debe cumplir una condición u otra

let esPrime = false;
let descuento = true;

if (esPrime || descuento) {
    console.log("Califica para descuento")
} else {
    console.log("no califica para envio gratis")
}

//(!) NOT se utiliza para negar el valor de una condición

let esDiaLibre = false 

if (!esDiaLibre) {
    console.log("Se trabaja");
} else {
    console.log("Descansito");
}


//Operadores de cadena

//toLowerCase

let mensajeUsuario = "Bienvenidx a la tierra";
let cambioMinusculas = mensajeUsuario.toLowerCase();

console.log(cambioMinusculas);

//toUpperCase hace el cambio de nuestro string a mayúscula

let saludo = "Casi viernes, casi Navidad";
let cambioMayusculas = saludo.toUpperCase();

console.log(cambioMayusculas);

//trim quita los espacios

let aviso = "     Ch35    Rifa"
let sinEspacios = aviso-DataTransferItem();
//let sinEspacios = aviso.trim();

console.log(aviso);

//toString convierte un tipo de dato number en string

let numero10 = 31;
let cadenas = numero10.toString();

console.log(cadena);

//concat

let nombre = "fernanda";
let apellido = "Ramos";
let nombreCompleto = nombre.concat ("", apellido)


console.log(nombreCompleto);

/* Expresiones 

expresión aritmetica

let operacion = 14 + 25 * 12; combinala suma con la multiplicación

expresión de cadena

let notificación = "Casi," + "Anio nuevo"; expresión concatenando

expresion lógica



let esMayorDeEdad = (23 > 18) && (23 < 65); tiene operadores lógicos y de comparación

expresión de asignación

let  frasco = chocolates; asigna el valor a la variable


*/

