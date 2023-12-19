const emailInput = document.getElementById("email");
const submitButton = document.getElementById("btn-submit");
    //REGEX = expresiones regulares, determina patrones a cumplir
const emailREGEX = /^[\w.+\-]+@gmail\.com$/;

//Desabilitar boton
submitButton.disabled = true;


emailInput.addEventListener("input", (e) => {
    const text = e.target.value;

    if(emailREGEX.test(text)== true){
        submitButton.disabled = false;
    }
});