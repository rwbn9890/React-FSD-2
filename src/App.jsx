
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Products from './components/Products'

import products from "./utilities/data"
import Cart from './components/Cart'


function App() {

  const [cart, setCart] = useState([])

  const logo = {
    img:"https://flowbite.com/docs/images/logo.svg",
    text: "flowbite"
  }


  function addCart(obj){

    let newObj = cart.find((ele) => ele.title == obj.title)
    if(newObj){
    let newCart= cart.map((ele) => ele.title == newObj.title ? {...ele, qtn:ele.qtn++} : ele)
    setCart(newCart)
    }
    else{
      setCart([...cart, {...obj, qtn:1}])
    }
  }
  console.log(cart)


  return (
    <>

<Cart cart={cart}/>
<Navbar  logo={logo} len={cart.length}/>
    <Products data={products} addCart={addCart}/>


<h1 >big</h1>

    </>
  )
}

export default App
