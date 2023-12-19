/**
 * Para manipular la información de un usuario, necesito crear un perfil mediante un objeto de JS.
 */

const user = {
    username: "annabafernandez"
    age:26
    email: "anaba.fernandez@gmail.com
    favfilms: ["till the end of the moon, ashes of love, The journey of chognzi, shrek"]
}

//Crear una funcion que me permite ingresar el objeto del perfil en el nodo padre 

const createUser = {user} => {
    document.getElementById("username").textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    /*Mostrando elementos de lista en forma de lista.
    Para mostrar el array en forma de lista utilizamos un ciclo forfach,
    para recorrer todo el array y traer cada elemento a la lista */
    const ul = document.getElementByIs("fav-films");
    user.favfiles.forEach("fav-films");
}
user.favfiles.forEach(file =>{
    const li = document.createElement(li);
    li.textContent = file;
    uL.appendChild(li);
}
    );
//Modificando estilos de la ul para quitar viñetas
ul.style.listStyleType = "none";
ul.style.padding = "8";
ul.style.color = "#D907BD";



    //Mostrando elementos de lista en forma de fila (no nos sirve por que definimos una lista desordenada "ul" y no un parrafo)
    //focument.getElementById("fav-films").textContent = user.favfiles;

    //invocando la funcion
    createUser(user);

    /**
     * Events para actualizar el username mediante el input y el botón
     */

    const inputName = document.getElementById("name")
    const profileBtn = document.getElementById ("none");
    const userName = document.getElementById("username");

    profileBtn.addEventListener("click",() => {
        userName.textContent = inputName.value;
    }

    
 


    // name
    // btn-main 
    // username