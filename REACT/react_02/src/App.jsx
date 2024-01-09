import './App.css'
import Navbar from "./components/Navbar.jsx"
import Button from './components/Button'
Import Main from './components/Main'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Main/>
      <Button label= 'traer informacion'/>
      <Button label= 'enviar informacion'/>
      <Products />
      <Products 
        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933' '"
        name="Fashion"
        description="Tennis FItness Runninig Purple"
        price='$1985'
      /> 
     
    
    <Products

    img= {imgFashion}
    name='Fashion'
    description= 'Tennis dark Running'
    price= '$2296'
    />
<Products

img= {imgDark}
name='Fashion'
description= 'Tennis dark Running'
price= '$2296'
/>


    </>
  )
}

export default App
