
import { useEffect, useState } from 'react'
import './App.css'
import { useCount } from './reactHooks'



function App() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])


  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=8&skip=${page}`)
    const prod = await res.json();
    setData(prod.products)

    console.log(prod)

  }


  useEffect(() => {
    fetchData()
  }, [page])








  return (
    <>

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

  <button onClick={()=>setPage(page-1)} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    Previous
  </button>

<h2>{page}</h2>

  <button  onClick={()=>setPage(page+1)}  className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    Next
  </button>
</div>

    </>
  )
}

export default App
