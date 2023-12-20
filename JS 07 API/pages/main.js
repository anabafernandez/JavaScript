//Programación sincrónica
function two () {
    console.log("dos");
}

function one () {
    console.log("uno");
    two();
    console.log("tres");
}

one(); 
console.log("******************")
/*Programación asincrona.
/serTimeout que recibe una función anónima y establece un tiempo (de milisegundos 1000ms = 1s) de ejecución para cumplir con la condición de asincronismo */

const twoAsync = () => {
    setTimeout( () => {
    console.log("dos Async");
}, 5000);
}

const oneAsync = () => {
    setTimeout(function () { 
    console.log("uno Async");
}, 2000);
    twoAsync ();
    console.log("tres Async");
}

oneAsync();

/*
* Trabajando con promesas mediante fetch API
*/
const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
//Si se cumple la promesa, vamos a traer los datos de la API y se convertirá en tipo json para poder mostrarlos en consola
.then(data => data.json ())
.then(data => {
    console.log(data);//Mostrando

console.log(data[0].name);
})
.catch(error => console.error ("Ups, algo salio mal", error));
//mensaje de error

//usando fetch para mostrar en navegador 
const botonInfor = document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje");

//Variable para guardar la información que se va a treaer desde la API: Debe ser de tipo null
let post = null;

//Consumiendo API con fetch (promesas)
fetch("https://jsonplaceholder.typicode.com/users/6")

//Función que no permita manipular la variable tipo null

//Consumiendo API con fetch (promesas)
buttonInfor.addEventListener("click", () => fetch ("https://jsonplaceholder.typicode.com/users/6")
.then(response => {
    post = response; //Guardo los datos de response en la variante de tipo null, para que notificar el dato
    //Mandamos a llamar la variable desde la función (pero, eso no lo hemos hecho, hay que hacerlo.)

})
.catch(error => console.error ("!problemas", error))

);

//función que me permita manipularla variable de tipo null
//Quiero traer name, username, email, phone del user de la API
const mostrarDatos = (post) => {
    //Creando nodos
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement ("p");
    const phone = document.createElement("p");

    //Ponerlos en el HTML (innerHTML)
    name.innerHTML = post.name;
    userName.innerHTML = post.username;
    email.innerHTML = post.email;
    phone.innerHTML = post.phone;

//Hacer que aparezcan en el navegador

    info.appendChild(name);
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);
    

}

//Fetch para mostrar en navegador (mostrar productos)

const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");

let productos = null;

botonProductos.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(response => {
            productos = response;

            mostrarProductos(productos);
        })
        .catch(error => console.error("Algo salió mal", error))
})

//Funcion para crear, agregar y mostrar elementos desde el DOM

const mostrarProductos = (productos) => {
    productos.map((productos) => { //El método map toma el array (objeto en JS y crea nuevos arreglos que se pueden manupular de manera individual. Así, evitamos el uso de un ciclo foreach)
        const tittle = document.createElement("h2");
        const image = document.createElement("img");
        const price = document.createElement("h3");
        const description = document.createElement("p");
        const category = document.createElement("p");
        const separador = document.createElement("hr");

        //Envivar a HTML con innerHTML
        tittle.innerHTML = productos.tittle;
        image.src = productos.image;
        image.width = 200;
        price.innerHTML = productos.price;
        description.innerHTML = productos.description;
        category.innerHTML = productos.category;
        

        //Mostrarlos en navegador al agregarlos a su padre
        tienda.appendChild(tittle);
        tienda.appendChild(image);
        tienda.appendChild(price);
        tienda.appendChild(description);
        tienda.appendChild(category);
        tienda.appendChild(tittle);
        tienda.appendChild(separador);
    })
}

//Método POST utilizando fetch, Me permite crear recursos en la API
fetch("http://jsonplaceholder.typicode.com/posts", {
//indicar que es un método de tipo POST
method: "POST",
//Creo el body de mi nuevo objeto, siguiendo las mismas llaves de la API existente ()
body: JSON.stringify ({
    userid: 1986,
    title: "Sueñan los androides con ovejas electricas?"
    body: "Author: Phillip K.Dick"
})
//Definir headers
headers: {
    "Content-type" : "application/json; charset=UTF-8"

}


})//Fin de mi fetch
    //Inicio de mis promesas
.then(response => response.json())
.then(json => {
    console.log(response)
})

/*