import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProduct } from "./redux_rtk/productReducer/productAction"
import { fetchUsers } from "./redux_rtk/usersReducer/usersAction"
import Dummy from "./components/Dummy"






function App() {

  const prod = useSelector((state) => state.prod)
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  

  useEffect(()=>{
    dispatch(getAllProduct())
  }, [])

  console.log(users)

if(users.loading)
{
  return (
    <div className="p-10 text-lg text-red">
      lading....
    </div>
  )
}

  return (
    <>
    <button onClick={() => dispatch(fetchUsers())} className=" p-2  shadow rounded-lg bg-black text-white">call users</button>

    <button onClick={() => dispatch(fetchUsers(1))} className=" p-2  shadow rounded-lg bg-black text-white">single users</button>
   
    <Dummy/>
    </>
  )
}

export default App
