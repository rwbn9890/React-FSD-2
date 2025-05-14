
import { useEffect, useState } from 'react'

import './App.css'
import { useCount } from './reactHooks'
import List from './components/list'



function App() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [cat, setCat] = useState([])
  const [filter, setFilter] =useState("")
  const [sort, setSort] = useState("")


  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/products/${filter}?limit=8&skip=${page}&sortBy=price&order=${sort}`)
    const prod = await res.json();
    setData(prod.products)
    console.log(prod)
  }


  useEffect(() => {

    fetch('https://dummyjson.com/products/category-list')
      .then((res) => res.json())
      .then((res) => setCat(res))

  }, [])

  useEffect(() => {
    fetchData()
  }, [page,filter, sort])


  // const message = data.length==0 ? <h1 className='text-3xl font-bold text-center my-20'>Data not found</h1> : null;
  
  // function getMessage(){
  //  let message  = data.length==0 ?  <h1 className='text-3xl font-bold text-center my-20'>Data not found</h1> : null;
  //  return message
  // }

  return (
    <>
      <div className='max-w-7xl m-auto my-5 p-2 grid grid-cols-4 '>
        <select onChange={(e) => setFilter(`category/${e.target.value}`) } class= "col-end bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {
            cat.map((ele) => <option key={ele} value={ele} >{ele}</option>)
          }
        </select>
        <div >
          <button onClick={()=>setSort("asc")} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">⬆️</button>
          <button onClick={()=>setSort("desc")} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">⬇️</button>
        </div>
      </div>



          {!data.length && <h1 className='text-3xl font-bold text-center my-20'>Data not found</h1>  }

      <div className='max-w-7xl m-auto p-2 grid grid-cols-4 gap-4'>
        {
          data.map((ele) => (
            <div key={ele.id} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={ele.thumbnail} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{ele.price}</div>
                <p className="text-gray-700 text-base">
                  {ele.title}
                </p>
              </div>
              {/* <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div> */}
            </div>
          ))
        }


      </div>
      <div class="flex m-auto justify-center">

        <button onClick={() => setPage(page - 1)} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Previous
        </button>

        <h2>{page}</h2>

        <button onClick={() => setPage(page + 1)} className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Next
        </button>
      </div>

      <List/>

    </>
  )
}

export default App
