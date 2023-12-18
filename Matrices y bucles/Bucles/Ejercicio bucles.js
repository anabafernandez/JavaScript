 /*
*Ejercicios
*Ejercicio de Arrays:
Descripción:
Supongamos que tienes una lista de temperaturas diarias en grados Celsius para una semana. Tienes que convertir estas temperaturas a grados Fahrenheit y mostrar los resultados.
* Temperaturas diarias en grados Celsius para una semana
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
*Instrucciones: */

package arraylist;
public class ArrayList {

    public Temperatura(int dia, double celsius) {
        this.dia = dia;
        this.celsius = celsius;
    }

    public int getDia() {
        return dia;
    }

    public double getCelsius() {
        return celsius;
    }

    public double convertirAFahrenheit() {
        return (celsius * 9 / 5) + 32;
    }

    public static void main (String[] args) {

        
        list <Temperaturas>lista = new ArrayList <Temperaturas> ();
        lista.add(new Temperaturas(1,"22"));
        lista.add(new Temperaturas(2,"25"));
        lista.add(new Temperaturas(3,"19"));
        lista.add(new Temperaturas(4,"30"));
        lista.add(new Temperaturas(5,"27"));
        lista.add(new Temperaturas(6,"21"));
        lista.add(new Temperaturas(7,"18"));

        System.out.println("Temperaturas en Celsius y Fahrenheit:");
        for (Temperatura temp : lista) {
            double fahrenheit = temp.convertirAFahrenheit();
            System.out.println("Día " + temp.getDia() + ": " + temp.getCelsius() + "°C -> " + fahrenheit + "°F");
        }
        
    }
}






/*Crea una función llamada celsiusToFahrenheit que tome una temperatura en grados Celsius y la convierta a grados Fahrenheit usando la fórmula: F = C * (9/5) + 32.
Utiliza un bucle para recorrer el array temperaturasCelsius, llama a la función celsiusToFahrenheit para cada temperatura y almacena los resultados en un nuevo array llamado temperaturasFahrenheit.
Muestra ambos arrays (temperaturasCelsius y temperaturasFahrenheit) en la consola.
*/
function celsiusAFahrenheit(celsius) {
    return celsius * (9/5) + 32;
  }
  
  const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
  const temperaturasFahrenheit = [];
  
  // Convertir temperaturas de Celsius a Fahrenheit y almacenar los resultados
  for (let i = 0; i < temperaturasCelsius.length; i++) {
    let fahrenheit = celsiusAFahrenheit(temperaturasCelsius[i]);
    temperaturasFahrenheit.push(fahrenheit);
  }
  
  // Mostrar ambos arrays en la consola
  console.log("Temperaturas en Celsius:", temperaturasCelsius);
  console.log("Temperaturas en Fahrenheit:", temperaturasFahrenheit);



/*
*Ejercicios de Bucles:
*Descripción:
Escribe un programa que sume los primeros 10 números naturales (1 al 10) e imprima el resultado.

*Instrucciones:

Utiliza un bucle (for o while) para sumar los números del 1 al 10.
Imprime el resultado de la suma en la consola.
Sugerencia:
Puedes usar una variable llamada suma para acumular la suma mientras recorres los números.
*/

// Variable para almacenar la suma de los números
let suma = 0;

// Bucle para sumar los números del 1 al 10
for (let i = 1; i <= 10; i++) {
  suma += i; // Acumulación de la suma
}

// Mostrar el resultado en la consola
console.log("La suma de los primeros 10 números naturales es:", suma);



/*
*Ejercicio : Números Primos
Escribe un programa que determine si un número ingresado por el usuario es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Puedes utilizar un bucle for para verificar si el número tiene algún divisor además de 1 y él mismo.*/

// Función para verificar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false; // Si tiene algún divisor diferente de 1 y sí mismo, no es primo
      }
    }
    return true; // Si no tiene ningún divisor diferente de 1 y sí mismo, es primo
  }
  
  // Pedir al usuario que ingrese un número
  const numeroUsuario = parseInt(prompt("Ingresa un número para verificar si es primo:"));
  
  // Verificar si el número ingresado es primo y mostrar el resultado
  if (esPrimo(numeroUsuario)) {
    console.log(numeroUsuario + " es un número primo.");
  } else {
    console.log(numeroUsuario + " no es un número primo.");
  }


/*
*Ejercicio : Secuencia de Fibonacci
Escribe un programa que genere los primeros 10 términos de la secuencia de Fibonacci. La secuencia de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, ...).
Estos ejercicios implican un poco más de lógica y son ideales para practicar conceptos más avanzados. ¡Espero que disfrutes resolviéndolos!*/

// Función para generar los primeros n términos de la secuencia de Fibonacci
function fibonacci(n) {
    let fib = [0, 1]; // Inicializar con los dos primeros términos
  
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]; // Cada término es la suma de los dos anteriores
    }
  
    return fib.slice(0, n); // Devolver los primeros n términos de la secuencia
  }
  
  // Obtener los primeros 10 términos de la secuencia de Fibonacci
  const primerosDiez = fibonacci(10);
  
  // Mostrar los términos en la consola
  console.log("Los primeros 10 términos de la secuencia de Fibonacci son:", primerosDiez.join(", "));