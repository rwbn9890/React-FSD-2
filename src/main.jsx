import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CountContextProvider from './context/CountContextProvider'
import TodoContextProvider from './context/TodoContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoContextProvider>
      <CountContextProvider>
        <App />
      </CountContextProvider>
    </TodoContextProvider>
  </StrictMode>,
)
