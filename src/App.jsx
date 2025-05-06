
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Products from './components/Products'

import products from "./utilities/data"


function App() {

  const logo = {
    img:"https://flowbite.com/docs/images/logo.svg",
    text: "flowbite"
  }


  return (
    <>

<Navbar  logo={logo} len={products.length}/>
    <Products data={products}/>


<h1 >big</h1>

    </>
  )
}

export default App
