
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <frameElement>
      <Navbar/>
      <div className="max-w-7xl mx-auto border p-4">
        <div className="flex gap-2 flex-wrap ">
          <div className="shadow shadow-lime-400 rounded-md p-5 w-[25%]">
            first Box
          </div>
          <div className="shadow shadow-lime-400 rounded-md p-5 w-[25%]">
            first Box
          </div>
          <div className="shadow shadow-lime-400 rounded-md p-5 w-[25%]">
            first Box
          </div>
          <div className="shadow shadow-lime-400 rounded-md p-5 w-[25%]">
            first Box
          </div>
          <div className="shadow shadow-lime-400 rounded-md p-5 w-[25%]">
            first Box
          </div>
        </div>
      </div>
      <Footer/>
    </frameElement>
  )
}

export default App
