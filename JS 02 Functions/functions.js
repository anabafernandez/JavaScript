/*
funciones. Son bloques de código con instrucciones que se pueden reutilizar las veces que sean necesarias.
Algunas funciones reciben parámetros y otras no reciben parámetros */

//función que permita saludar
function saludar() {
    console.log("Hola desde una función");
}

//Ejecutar la función con el nombre de la función y los parámetros
saludar();

//Hoisting. Característica de una función que nos eprmite invocarla desde antes de su inicialización, es decir se puede invocar antes del bloque de código o después.
//Se invoca en la linea 11 y en la linea 18
function saludar() {
    console.log("Hola invocando la función con hoisting");
}
saludar();

//funciones que retornan algo, Para que una función retorne algo (un string, una operación, una variable, etc.), necesitamos indicarle al código de la función que vamos a retornar mediante la palabra return)
function greeting () {
    return "Hola desde una función que retorna";
    console.log(greeting());

  
greeting();

  //función que retorna y recibe parámetros
  function sumar(x,y) {
    return x + y;
    
}
let resultado = sumar(255,245);
console.log("El resultado de sumar x + y es ${resultado}");

//Función para calcular el cuadrado de un número

function calcCuadrado (numero) {
    return numero * numero;

}
let resultCuadrado = calcCuadrado(5);
console.log(resultCuadrado);

//Funciones flecha (Arrow Function). Es una manera de declarar una función por declaración, sintetizando código y haciendolo más legible.

const calcCUbo = (number) => {
    return number * number * number;
}
let resultCubo = calcCubo(3);
console.log(resultCubo);

//Funciones anónimas, Son un tipo de funciones que se declaran sin nombre de función y se alojan en el interior de una variable, se hace referencia a ellas cada vez que la utilicemos

console.log(mensaje());

const mensaje = function () {
    return "Este es un msj desde una función anónima"
}
console.log(mensaje());

//Callbacks, Es pasar una función B por parametro a una función A, de modo que la función A pueda ejecutar esa función de forma genérica desde su código.

const functionB = function () {
    console.log("Ejecutando función B");

}
//Funcion A que mandará a llamar a la función B
const functionA = function (callback) {
    callback();
}
functionA(functionB);