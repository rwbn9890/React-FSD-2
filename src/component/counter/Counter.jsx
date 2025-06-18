import React from 'react';

// import { store } from '../redux/Store';
import { useDispatch, useSelector } from 'react-redux';
import { decCount, incCount, resCount } from '../../redux/counter/Action';

const Counter = () => {
    let storeCount = useSelector((store) => store.counter.count)
    const dispatch = useDispatch()

    // console.log(storeCount)
    // console.log(store.getState())

//     function handleInc(){
//         // store.dispatch({type:"INC"})

//  dispatch({type:"INC"})
//     }



    // function handleDec(){
    //     // store.dispatch({type:"DEC"})
    //     //  dispatch({type:"DEC"})
    //     //  dispatch(incCount())
    // }








    return (
        <div className='max-w-7xl mx-auto text-center'>
            <h2 className='font-bold text-2xl'>{storeCount}</h2>
            <button onClick={() => dispatch(incCount())} className='border p-1 text-xl bg-gray-700 hover:bg-gray-800 text-white rounded-full w-10 h-10'>+</button>

            <button onClick={() => dispatch(decCount())} className='border p-1 text-xl bg-gray-700 hover:bg-gray-800 text-white rounded-full w-10 h-10'>-</button>
            <button onClick={() => dispatch(resCount())} className='border p-1 text-xl bg-gray-700 hover:bg-gray-800 text-white rounded-full w-10 h-10'>❌</button>
        </div>
    );
}

export default Counter;
