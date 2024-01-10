import { Link } from "react-router-dom"

const Inicio = () => {
    return (
        <>
        <div>
            <h1>Esta es la pagina de Inicio</h1>
            <link to = "about-us">
        
                    Presiona aqui para ir a la página sobre nosotros
            </link>
            <br />
            <br />
            <link to = "contact">
                Presiona aqui para ir a la página contacto
            </link>
        </div>
        </>
        )
}

export default Inicio