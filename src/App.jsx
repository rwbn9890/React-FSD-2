
import { useEffect } from 'react'
import './App.css'
import Counter from './component/counter/Counter'
import Todo from './component/todo/Todo'
import { useDispatch } from 'react-redux'
import { fetchMovies } from './reduxToolkit/moviesReducer/movieThunk'
import { moviesActions } from './reduxToolkit/moviesReducer/moviesSlice'
import Movies from './component/movies/movies'


function App() {
  
const baseUrl = "https://fakestoreapi.com/products"
  
  const dispatch = useDispatch()



  useEffect(()=>{

   fetchMovies("/products").then((res)=>{
    dispatch(moviesActions.allMovies(res))
   })

   fetchMovies("/users").then((res)=>{
    dispatch(moviesActions.allUsers(res))
   })

  },[])

  return (
    <>
      <Counter/>

      <Todo/>
      <Movies/>
      <div>
       
      </div>
    </>
  )
}

export default App
