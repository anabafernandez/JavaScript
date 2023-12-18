/* 
*===== BUCLES =====
* Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

* -- Operadores de incremento (++) y operadores de decremento (--)
*${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.
* Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 
*- El operador ++ se utiliza para aumentar el valor de una variable en uno.
*- El operador -- se utiliza para disminuir el valor de una variable en uno.
* (i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.
*/

/* === Ciclo for ===
Un ciclo for se repite hasta que la condición se evalue como false . Creo 3 expresionales opcionales
    *Sintaxis
        *for (expresioninicial; exprecioncondicional;
            *Código a ejecutar en cada iteración del bucle)

        1. Inicialización: se debe inicializar con una variable que será evaluada en la expresión a comparar.
        2.Condición: es una expresión que debe cumplir la variable inicial (true), si no se cumple (false) el bucle termina.
        3 Pasos a realizar: son los intervalos que cambiaran la variable inicial mientras esta sea true.
        */
       //*Crear un programa para saber cuantos boletos verdaderos para una rifa
       
       for (let boletos = 1; boleto <= 25; boleto ++) {console.log("boleto # $(boleto)");
    }
//* Crear un programa para saber cuantos boletos vendemos para una rifa

for (let boleto = 1; boleto <? 15;; boleto ++=) {console.log(boleto # $(boleto)");
}

//*Programa para vender bolos con una variable global
let bolos = 1; 

for (bolos; bolos <? 28; bolos++){
    console.log("Vendi ${bolos})
}

//*Cuenta regresiva
let cuenta regresiva = 15; 

for (cuentaRegresiva; cuenta regresiva >= 0; cuentaRegresiva==) {
    console.log("Quedan ${cuentaRegresiva}")
}


/*
Recorrer Arrays con el ciclo for
Debemos usar índices del arreglo para poder usar el bucle, en índices desde el 0 hasta n y usaremos la propiedad length
*/

const ch35 = ["Ana", "Arturo", "Víctor", "Marco", "Yonuel", "Liz"];

for(let i = 0; i < ch35.length; i++){
    console.log(ch35[i]);
}

const users = ["user1","user2","user3","user4","user5","user6","user7","user8","user9","user10"];

 for (let i=0;i<users.length;i++){
    console.log(users[i]);
 }

 /* 
 ? Variaciones del ciclo for
  * -- for...of nos permite recorrer el objeto (array) y devuelve el valor
  * -- for...in nos permite recorrer el objeto (array) y devuelve su posición (indices)
*/

for (let user of users){
    console.log(user+" of");
 }

 //* sumar numeros del 1 al 20
 let suma = 0;
 for (let i = 1; i <=20; i++){
    suma += i;
 }
 console.log(suma);

 //* Tabla 5
 const tabla = 5;
 for (let i = 1; i<= 10; i++) {
    let resultado = tabla * i;

    console.log("${tabla} x ${i} = ${resultado}");
 }

 /*
 *Ciclo While
 * Recorrer un bloque de codigo siempre que una condicion especifica sea verdadera.
 *Sirve para realizar una tarea repetitiva mientras una condición sea verdad.
 */
//*Venta de productos
 
 let productos = 5;
 
 while (productos < 0) {
    console.log(productos + "productos vendidos");
    productos --;
 }

 //*imprimir numeros 
 let num1 = 0;
 while(num1 < 10) {
    num1 ++
    console.lof ("El numero es " + num1);
 }

