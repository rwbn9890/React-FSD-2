import React, { useContext } from 'react'
import {CountContext} from '../context/CountContextProvider'

const Button = () => {

    const { handleCount } = useContext(CountContext)
    return (
        <button onClick={handleCount} className="px-4 py-1 bg-green-800 text-white rounded-sm">Inc</button>
    )
}

export default Button