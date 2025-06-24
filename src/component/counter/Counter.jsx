import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decCount, incCount } from '../../reduxToolkit/reducers/counterSlice';
import Button from '../Button';

const Counter = () => {

    let count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()



    return (
        <div className='max-w-7xl mx-auto my-10 text-center'>
            <div className="inline-flex rounded-md shadow-xs" role="group">
              
                <Button onClick={() => dispatch(incCount())} >+</Button>
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700  ">
                    {count}
                </button>
                 <Button onClick={() => dispatch(decCount())} >+</Button>
            </div>

        </div>
    );
}

export default Counter;
