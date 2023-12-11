//comentarios de una sola linea/

/*comentarios más lineas */

//alert("Hola mundo");

//console.log("Este es un mensajje para mi consola")

/*var nombre = prompt("Ingresa tu nombre");
alert("Hola , " + nombre + " Bienvenidx a la ch35");*/


var numero1 = parseInt (prompt("Ingresa el primer numero:"));
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

  var edad;
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

