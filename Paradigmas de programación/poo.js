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
    telefono = "",

//Objetos
//para inicializar un objeto es necesario definir un constructor que tomará los atributos
//El constructor es una funcion especial cuya finalidad es la de construir o 
//clases molde objeto = gomita = chefsitx atributos = ingredientes metodos =comportamientos.

constructor (nombre, apellido, edad, email, telefono) {
    
}

correr (){
    console.log ("Bon apetit");
}//notodo correr

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