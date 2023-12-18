//comentarios de una sola linea/

/*comentarios más lineas */

//alert("Hola mundo");

//console.log("Este es un mensajje para mi consola")

/*var nombre = prompt("Ingresa tu nombre");
alert("Hola , " + nombre + " Bienvenidx a la ch35");*/


/*var numero1 = parseInt (prompt("Ingresa el primer numero:"));
var numero2 = parseInt (prompt("Ingresa el segundo numero:"));

console.log("suma:" + (numero1 + numero2));
console.log("resta:" + (numero1 - numero2));
console.log("multiplicación" + (numero1*numero2));
console.log("division:" + (numero1 / numero2));

var edad = prompt("¿Que edad tienes?");

if (edad >= 18) {
    alert("Eres mayor de edad. ¡Bienvenido!");
  } else {
    alert("Eres menor de edad. Lo sentimos, debes ser mayor de 18 años para continuar.");
  }
  /**if else if **/

  /*var edad;
  var res = "s";

  while(res==="s"){

    edad = parseInt(prompt("Dame tu edad"));
    //console.log(edad);

    
    if(0 <= edad && edad< 18){
      alert("Tss todavia pides permiso");
    }else if (18<=edad && edad <30){
      alert("Ya alcanzas el timbre :D");
    }else if (30<=edad && edad <50){
      alert("Tambien te duelen las rodillas?");
    }else{
      alert("Es hora de irse a mimir");
    }
    res= prompt("Otra edad? s/n");

  } 

  //TIPOS DE DATOS Y VARIABLES

//scope es el alcance de nuestras variables

/*var, let, const la diferencia es el alcance 
var tiene un alcance global
let tiene un alcnace local
const se mantiene sin ningun cambio*/

/*string:cadena de texto (lleva comillas)
number: numero
noolena: true/false
null:nulo
undefinied:no esta asigando o definido*/

let nombre = "Daniel" ;
let invitadxsExtras = 2;
let esMayorEdad = true;
let edad = 25;
let invitadxEspecial = null;
let horaDeSalida = undefined;

console.log(nombre);
document.write(nombre);

/*Encasillamiento o tipado
nos es util para el encasillamiento del código ya que lo hace más legible y fácil de entender
prevención de errores parar educir la probabilidad de los mismos
mejora el rendimiento de nuestro programa
*/

/*let numero = 15;
let texto = "hola";

// con encasillamiento 

let numeroEncasillado= Number=5;
let textoEncasillado= string = "hola";*/

//typeof palabra reservada para saber que tipo de dato tenemos

//parseInt y parseFloat son funciones que se utilizan para convertir cadenas de texto en números, ambas nos

console.log(typeof(nombre));

let funcionNumber = console.log (typeof Number (nombre));

metodoPartseInt = console.log(typeof (nombre));
metodoParseFloat = console.log(typeof parseFloat (nombre));





//Ejemplo

var numero1 = "4";
var numero2 = "5";

console.log("Tipo de variable numero1: "+typeof(numero1));
/*
typeof solo devuelve el tipo de variable que estas utilizando
*/
console.log("Tipo de variable luego de aplicar un Number: "+typeof(Number(numero1)));
console.log("Tipo de variable luego de aplicar un parseInt: "+typeof(parseInt(numero1)));
/*
Number: tranforma tu variable a una variable numerica
parseInt: tranforma tu variable a un tipo de variable entera
en el ejmplo lo utilizamod para sumas dos variables tipo string
*/
console.log(numero1+numero2);
console.log(parseInt(numero1)+parseInt(numero2));
console.log(Number(numero1)+Number(numero2));

/* conversion de number a string

console.log(typeof String(edad));
console.log(typeof edad.toString());*/

let number = Number (esMayorEdad); 

console.log(numero); 

/*Tipos de datos

> - String (Cadenas de texto)

> - Number (numéricos)
Booleans(booleanos: true or false)

> - Null (nulos)


> - Undefinied (Indefinidos)

> - Objects (objects)

> - Objects (Arrays)

*/

//console.log():

/*
console.log(); Nos permite visualizar en consola del navegador el código de JS
console.warn(): Muestra un mensaje de advertencia.
console.error(): Muestra un mensaje de error.
console.table(); */

let firstName;
firstName="Daniel";
let lastName= "Maldonado";

console.log(firstName + "" + LastName);
console.log("Mi nombre es " + firstName + "y mi apellido es " + lastName);

/*ECMAScript 6 (E56). Interpolación de cadenas 
> - backticks
> - Para variables las invocamos ${variable}
> - Texto para string

*/
let age= 37;
console.log("Mi nombre es ${firstName} y mi apellido es ${lastName} y tengo ${age} años");

//console.warn();
console.warn("Precaución, no es buena practica dejar sin punto y coma");

//console.error();
console.error("Status 404; Failed");

/* Array . Se traduce como matriz o arreglo, es un tipo de dato que pertenece a JS en el cual se almacena una colección de elementos de manera ordenada.
Los arrays se pueden manipular mediante métodos específicos.

Los elementos de una array se contabilizan como índices empezando por índice 0, por lo cual, el primer elemento del array posee el índice 0.
Un array posee n cantidad de elementos.
Se declaran como variables seguido del signo igual y corchetes. Dentro de cada corchete vive un elemento con un tipo de dato.
*/
let arreglo 1 = []; //Array vacío
console.log("Array vacío ${arreglo1}");
//los elementos de un array se separan mediante comas
let cars= ["Volkswagen", "BMW", "Mazda", "Kia"]; //Array de String
console.log(cars);
//Longitud e indice son diferentes. La longitud (length) es el número de elementos y el índice corresponde a cada eleemento a partir del 0.

console.log(typeof(cars)); //Output: Object
//Array de numbers
let salaries = [15000, 12000, 18000, 25,000, 10000, 17000, 17200, 10200, 20500, 15300]
console.log(salariesMxn.lenght);//Output: 12
console.log(salariesMxn);

/*
Objetos. los objetos son tipos de datos en JS, con una estructura definida que nos permite almacenar información mediante llaves(claves) y valores. Su sintaxis es la siguiente
const object {
    clave1: valor (dato).
    clave2: valor2 (dato2)
}
los objetos pueden almacenar diferentes tipos de valores.

*/
const employee = {
    firstName:"Rey David",
    lastName: "Martinez",
    age: 29
    country: "Mexico"
}

console.log(employee);
//Mostrando mi array como tabla
console.table(cars);
//Mostrando mi objeto como tabla
console.table(employee)