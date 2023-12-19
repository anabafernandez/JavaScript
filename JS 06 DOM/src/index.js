/*
Manipulación del DOM.
-Leer y traer nodos del arbol del DOM.
    document.getElementById (trae elementos por id)
    document.getElementByClassName (trae elementos por Class)
    document.getElementByTagName (trae elementos por etiquetas)
*/
    //getElementById
    const titulo = document.getElementById("title1");
    console.log(titulo);
    console.log(titulo.innerText); //Traer un string (texto que vive en mi id)

    //getElementByClassName
    const titulos = document.getElementsByClassName("title");
    console.log(titulos); //Devuelve la longitud de los elementos de la clase 
    console.log (typeof titulos); //Muestra que es un object por que es una colección de arrays

    //getElementByTagName
    const tituloh3 = document.getElementsByTagName ("h3");
    console.log(tituloh3);
    console.log(tituloh3[0].innerText);

    /* Métodos para llamar elementos mediante selectores de CSS
    Se usa pora procesos más específicos y la sintaxis querySelector
    -document.querySelector ("selector"); //#, .. <>
    -doccument.querySelectorAll(). Selecciona los elementos que se especifiquen.
    Siempre van a traer el primer elemento con el selector indicado */

    //querySelector
    const query = document.querySelector("#title4");
    console.log(query.innerText);

    const queryClass = document.querySelector(".title");
    console.log(queryClass);

    const queryClassAll = document.querySelectorAll (".title");
    console.log(queryClassAll);

    //Manipular elementos del DOM (styles) con js
    titulo.style.textAlign = "center";
    titulo.style.color = "5058F2";
    title2.innerText = "Sesión de Manipulación del DOM - CH35"
    title2.style.color = "#F23D3D";

    /*
    Métodos para crear y agregar elementos en el DOM. Este proceso se divide en dos: "crear el nodo y agregar el nodo" .
        -Crear nodos
        
        * document.createElement("element") --> Crea elementos a partir de etiquetas.
        
        * document.createTextNode("text") --> crea texto dentro de las etiquetas.

        */
       const Nodo1 = document.createElement("h4");
       const imgNodo = document.createElement ("img");

       /* 
        -Agregar nodos, mandamos a llamar al elemento padre y le pasamos la propiedad con la constante que guarda al nodo creado
        * parentElement.appendChild(const);
        * parentElement.append(const);
        * parentElement.InsertBefor(const);
        * parentElement.insertAdjacentElement(const);
        utilizaremos mayormente appendChild
        */

        //Obtengo el elemento padre por tag, class o id



        //Obtengo el elemento padre por tag class o id
        const parentElement = document.getElementById("dif");

    //Crear el texto que vivirá en el nodo1
    const textNodo1 = document.createTextNode ("Imagen agregada desde el DOM");
    //Inserto el texto en el nodo 1
    Nodo1.appendChild(textNodo1);
    //Insertar nodo1 en el elemento padre
    parentElement.appendChild(Nodo1);
    parentElement.style.fontFamily = "Karla, sans-serif";
    parentElement.style.color = "#281226";

    /* Agregando imagen */
    //Inserto el nodo imgNodo en el elemento padre para definirlo posteriormente
    parentElement.appendChild(imgNodo);
    //Accedo a las propiedades de la imagen
    imgNodo.src = "./src/assets/octocat.jpg";
    imgNodo.alt = "Octocat-gitHub";
    imgNodo.width = "300";

    const botonRandom = document.getElementById("btn");
const botonReset = document.getElementById("reset");
const colorFondo = document.body.style.backgroundColor;

//Vamor a declarar una funcion que genera un numero random tomando un parametro

const random = (number) => {
    return Math.floor(Math.random()*(number+1));
}

// Crear evento de click para que cuando presione un boton pase algo

//random
botonRandom.addEventListener("click", ()=>{
    const randomColor = rgb(${random(255)},${random(255)}, ${random(255)});
    document.body.style.backgroundColor = randomColor
})

// reset
botonReset.addEventListener("click", () =>{
    document.body.style.background = colorFondo;
});