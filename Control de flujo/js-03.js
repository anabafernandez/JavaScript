console.log ("Hola CH35");
/*

*Control de flujo y estructuras de control

*Las estructuras de control son un componente fundamental dentro de la programación, entre algunas de las facilidades y ventajas que nos proporcionan para escribir y depurar códigos podemos mencionar las siguientes:

*/

/*
*Declaración de sentencia if-else
*Palabra reservada if para comenzar la declaración, se coloca un parentesis () donde se debe colocar una expresión lógica (true/false), se abre y cierran llaves {} para indicar que sentencia va a ejecutar si la condición se cumple (true),
*después de la llave {} declarada para el bloque de ejecución if, colocamos la palabra reservada else, para este ejemplo no es necesario colocar más expresiones dentro de un ()
*simplemente colocamos otras llaves {} para indicar el bloque de código que tiene que ser ejercutado en caso de que la condición no se cumpla (false).

if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso
*/


let n = 15;
if(n > 10) {
    console.log(true);
} else {
    console.log(false);
}

//if anidados
let edad = 28;


if (edad < 18) {
    console.log ("Eres menor de edad, retirate");
} else if (edad >= 18 && edad < 65) {
    console.log("Eres un adulto joven");
} else {
    console.log("Eres un adulto mayor");
}

/*
Sentencia switch
*La sentencia switch es otro tipo de estructura de control de flujo, que, nuevamente se encuentra en diversos lenguajes de programación.
*Es bastante parecida a la sentencia if-else, pero diferente en cuanto a comportamiento, ya que no se basa en una bifurcación (particion de caminos), sino que se secciona en multiples casos (case) que, dependiendo de la expresión que cumpla con un caso específico, será la secuencia que se va a ejecutar, dentro de la declaración.

*Declaración:
*se empieza por colocar la palabra reservada switch, seguida seguido de esto, colocamos parentesis () donde se debe colocar el valor que va a indicar que sentencia/caso a ejecutar
*Falta indicar el bloque de código que se limita a esta sentencia, como lo haciamos en la sentencia if o con las funciones.
*Dentro de este bloque de código, falta colocar los casos para cada valor que se desee, establecer según sea el valor indicado dentro de el paréntesis ().
*Cada uno de essots casos se separa de la siguiente manera:
* case valor : instrucción a ejecutar si el valor empata con este caso.
*Después, para indicar que la ejecución de las sentencias debe cortarse cuando se cumpla, se coloca la instrucción 
*break. 
*Cuando terminemos de establecer los casos que necesitemos declarar, dentro de nuestra sentencia, debemos colocar un valor por defecto, default.
*Esta ultima sentencia nos permite establecer un valor por defecto, si es que este valor colocado no empata con ningún otro dentro de la sentencia o en ninguno de los casos.
*Default : manesaje no disponible.
*/

let dia = "martes";
switch (dia){
    case "lunes" :
        console.log ("Odio los lunes att: Garfield")
        break;
    case "martes" :
        console.log ("quien hace fiesta los martes?");
        break;
    case"miercoles" :
        console.log ("Toca presentar proyecto :("Casi viernes");
        break;
    case"jueves" :
        console.log ("Juevebes casi viernes");
    case"Viernes" :
        console.log ("Viernes de disfraces");
        break;
    case "Sabado"
        console.log ("Sabadrink y taquitos");
        break;
    case "domingo" :
        console.log ("Domingo de misa de 6 am, como Dios manda");
        break;
        default ;
        console.log ("Dia desconocido");
        break;

}//termina switch
/*
* Operador ternario

*Expresion condicional if-else más simple y legible

*Principalmente se usa para simplicar condiciones de una sola expresión.

*tambien puede anidar sentencias if-else-if, sin embargo, no es recomendado por que el codigo se puede volver confuso y poco legible.
*Su declaración  es la siguiente:
*Palabra reservada var, let o const:
*se le asigna un nombre como si se tratara de una variable, operador de asignación "=", seguido de este operador, hay que colocar una expresión lógica, esta va dentro de un parentesis (), después hay que colocar un caracter ? que indica el camino a seguir, dependiendo de si, se cumple (o no) la expresión.
*Para separar el resultado true de false debemos agregar un caracter de:, del lado izquierdo se coloca la sentencia a ejecutar,
*Si se cumple la condición, del lado derecho se coloca la sentencia a ejecutar
*/

// Ejemplo de operador ternario 

let verificación = n > 5 ? "Si es mayor" : "No es mayor"
console.log (verificación);

/*
*Cuando usar if-else u cuando switch?
*if-else : cuando necesitemos tomar decisiones bajo condiciones más flexicbles.
*switch : cuando tengamos un conjunto fijo de valores para comparar una expresión.
*/