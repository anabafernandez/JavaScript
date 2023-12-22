/* paradigmas de programación

Programación imperativa: se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada

Programación basada en eventos: Se basa en la gestión y respuesta de eventos

Programación declarativa: Explicar lo que queremos obtener.

Programación orientada a objetos: Toma cierta información o estructura del mundo real (objetos) para poder explicar ciertas cosas, como sus características (propiedades o atributos) y sus comportamientos o acciones (métodos).


*/

//Clases: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias de este tipo de objeto.

class persona{

    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

//Objetos
//para inicializar un objeto es necesario definir un constructor que tomará los atributos
//El constructor es una funcion especial cuya finalidad es la de construir o 
//clases molde objeto = gomita = chefsitx atributos = ingredientes metodos =comportamientos.

constructor (nombre, apellido, edad, email, telefono) {
    this.nombre = nombre;
    this.apellido = nombre;
    this.edad = nombre;
    this.email = nombre;
    this.telefono = nombre;
}

comer (){
    console.log ("Bon apetit");
}//notodo comer

bailar (){
    console.log("Dale hasta el suelo");
}//metodo bailar

mostrarinfo(){
    console.log("Nombre: ");
    console.log("Apellido: ");
    console.log("Edad: ");
    console.log("Email: ");
    console.log("Telefono: ");
}

}


let usuario1 = new persona ("Ana", "Fernandez", 26, "anaba.fernandez@gmail.com", "3317662560");
let usuario2 = new persona ("whitney", "houston", 41, "whitney.houston@gmail.com", "33234362560");
let usuario3 = new persona ("Luismi", "Guel", 31, "luismi.guel@gmail.com", "3317662560");
let usuario4 = new persona ("Cloud", "strife", 36, "cloudstrife123@gmail.com", "33123362560");
let usuario5 = new persona ("mario", "bros", 56, "mariobros@gmail.com", "33175345340");
let usuario6 = new persona ("Juan", "Perez", 51, "ajuanitoperez@gmail.com", "222344554354");

console.log(usuario1); //imprimir objeto completo
console.log(usuario4.email); //imprimir un atributo en especifigo
console.log(usuario1.email, usuario2.email, usuario3.email, usuario4.email, usuario5.email,usuario6.email)

usuario4.comer();//Invocando el método 
usuario1.mostrarinfo();
console.log(usuario3.telefono, usuario5.apellido);

//Pilares de la programación orientada a objetos

/*Herencia
polinofiano
encapsulamiento
Abstracción*/

    //Herencia nos permite heredar a clases inferiores para poder optimizar el programa

class arrendadxr {//subclass

    capacidad = 9;
    costo = "0";
    nombreLugar = "";

    constructor(){
        super(nombre, apellido, edad, email, telefono);
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombreLugar = nombreLugar;
    }
}

mostrarinfo () {
    console.log("capacidad" , this.capacidad);
    console.log("Costo , this.costo");
    console.log("Nombre del lugar" , this.nombreLugar);
}

let arrendadxr = new arrendadxr ("Rocio, "Hernandez", 29, "rocio@gmail.com, "5541236987", 100, 50000, "salon 6" ); 

console.log(arrendadxr1);

console.log(arrendadxr1.costo);

arrendadxr1.mostrarInfo();

/*
Polimorfismo: Tener objetos de diferentes tipos que pueden ser manipulados en común
*/

class Animal {
    sonido() {
      console.log('Hace un sonido genérico');
    }
  }
  
  class Perro extends Animal {
    sonido() {
      console.log('Guau guau');
    }
  }
  
  class Gato extends Animal {
    sonido() {
      console.log('Miau');
    }
  }
  
  const perro = new Perro();
  const gato = new Gato();
  
  perro.sonido();  
  gato.sonido();

/*class arrendadorxGuadalajara extends arrendadxr(
sub clase nieto
)*/

class producto {

    marca = "";
    precio = 0;

    constructor (marca, precio) {
        this.marca = marca;
        this.precio = precio;
    }

    mostrarDescripción() {
        console.log ("Marca");
        console.log("Precio");
    }
}

let producto1 = new producto ("cerave, 85");

//Encapsulamiento ocultar la implementación de un objeto y solo mostrar los datos necesarios

class Usuario {

    #contraseña;

    constructor(userName, correo, contraseña) {
        this.userName = userName;
        this.correo = correo;
        this.#contraseña = contraseña;
    }

    
}

verificarContraseña(contraseña) {
    return this.#contraseña === contraseña; 
}

//Abstraccion no es nada mas que traer objetos del mundo real y poder aplicarlos a la programación mediante clases, métodos, constructores y objetos 

//Los objetos de tipo Json en un formato de intercambio de datos ligero, accesible, estructurado, manipulable (DOM) y que nos brindan una mejor comunicación entre el cliente y el servidor. Esto gracias a que son más flexibles y generalmente se ejecutan con fetch

let objetoJson = {
    "nombre" = "juanin";
    "apellido": "Juanjarri";
    "edad": 31,
    email: "juanir@gmail.com"
    telefono: "3344545544"
} 

console.log(objetoLiteral);

//Principios solid

/*1 Principio de responsabilidad unica (single responsabilioty principle SRP)
Una clase de tener asignada una tarea o responsabilidad especifica y esta no deberia cambiar

2Principio abierto/cerrado (open/closed principle OCP)
Una clase puede estar abierta a extensiones y agregar nuevas funcionalidades pero sin generar cambios en la misma

3Principio de sustitución de Liskov (Liskov sunstitutor principle LSP)

Una clase hijo puede sustituir objetos de una clase padre

4Principio de segregación de interfaces (Interface segregation principle ISP)
Delimitar los metodos que necesito y dejar fuera los innecesarios

5Principio de inversión de dependencias (Dependency Inversion Principle DIP)
*/

/*Programa que conste de una clase llamad alumno que tenga como atributos nombre y calificación. Definir los métodos para atributos, imprimirlos y mostrar un mensaje con el resultado de si la calificación es aprobatoria o no */

class Alumno {
    constructor(nombre, calif) {
        this.nombre = nombre;
        this.calif = calif;
    }

    mostrarCalificacion() {
        console.log("La calificación del alumno es: " + this.calif);
    }

    estado() {
        let estadoAlumno = Number(this.calif) > 5.9 ? "Aprobado" : "Reprobado";
        console.log(`El alumno ${this.nombre} está ${estadoAlumno} con una calificación de ${this.calif}`);
    }
}

const alumnoA = new Alumno("EjemploAlumno1", 6.9);
const alumnoB = new Alumno("EjemploAlumno2", 7);

alumnoA.estado();
alumnoB.estado();

estudianteUno.evaluarEstatus();
estudianteDos.evaluarEstatus();

/*El principio SOLID son reglas para escribir un codigo más claro.
la letra s: Responsabilidad unica
la letra o: Abierto o cerrado
la letra L: se refiere a la sustitución de Liskov
la letra i: se refiere a la segregación de la interfaz
la letra d: se refiere a la inversión de dependencia.