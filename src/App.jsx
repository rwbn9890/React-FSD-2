import { useState } from 'react'
import './App.css'
import { useAllRecipeQuery, useProductPageQuery } from './reduxApi/recipeApi'


function App() {
  const {data:recipe, isLoading:recipeLoad, error:recipeError } =  useAllRecipeQuery("recipes")
  const {data:products, isLoading:productsLoad, error:productsError } =  useAllRecipeQuery("products")
  const {data:page } =  useProductPageQuery(8)

  // if(isLoading){
  //   console.log("loading...")
  // }else if(error){
  //   console.log(err)
  // }else {
  //   console.log(data)
  // }

  console.log(recipe)
  console.log(products)
  console.log(page)
  


  return (
    <>

      <div className="card">
        <button >
         
        </button>
      
      </div>
      
    </>
  )
}

export default App
