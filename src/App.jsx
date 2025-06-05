
import { useMemo, useState } from 'react'
import './App.css'


function App() {

  const [count, setCount] = useState(0)
  const [status, setStatus] = useState(false)

  // const finalCount = () => {
  //   
  // }

  const finalCount = useMemo(() => {
        return cal();
  } ,[count])


  function cal(){
    for(let i=0; i<1000000000; i++)
    {

    }
    return count;
  }


  return (
    <>
      <div className='max-w-xl mx-auto my-10 grid grid-cols-2'>
        <div>
           <button onClick={()=> setCount(count+1)} class="rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Count - {finalCount}
          </button>
        </div>
        <div>
           <button onClick={() => setStatus(!status)} class="rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            {status ? "TRUE" : "FALSE"}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
