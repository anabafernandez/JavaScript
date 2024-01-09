import './Products.css'
import Navbar from './components/main
import Button from './components/Button
import Products from './components/Products'

/*Comente esta linea de codigo por que fue la que use para el ejemplo de props estructurados*/

const Products = (img,name, description, price) => {

    return (
        <>
        {/* Agregando las propiedades directamente al componente, pero no se modifican las propiedades al importar el Componente en App.jsx, es decir, se repite la misma información */}
        
            <div className="cards">
            <div className="products--card">
                <img src= {props.img} alt ='sneakers' />
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h4>{props.price}</h4>
            </div>
        </div> 
        
       

        {/* Props estructurados. Puedo asignar diferentes propiedades a un div, sin tener que generar muchos props, solamente usando la palabra reservada 'props'como parametro de la funcion */}

        {/*Props desestructurados. Permite asignar datos de un objeto a una variable separada para que dicha variable pueda contener los datos provenientes del obvjeto.
        No utilizamos 'props'como parametro de la funci[on, sino qwue, asignamos parametros a cada elementos y los llamados directamente en dichos elementos.
        Los props desestructadores viven como parametros, pero entre llaves y se les asigna un nombre especifico.]} */}
        
        <div className="cards">
            <div className="products--card">
                <img src={img} alt='sneakers' />
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>{price}</h4>
            </div>
        </div>
        </>
    )
}

export default Products