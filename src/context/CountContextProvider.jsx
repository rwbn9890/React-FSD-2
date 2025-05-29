import { useState } from "react";
import { createContext } from "react";


export const CountContext = createContext()


const CountContextProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    function handleCount() {
        setCount(count + 1)
    }


    return (
        <CountContext.Provider value={{ count, handleCount }}>
            {children}
        </CountContext.Provider>
    )
}

export default CountContextProvider;