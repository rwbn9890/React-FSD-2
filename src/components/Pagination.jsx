import React from 'react';

const Pagination = ({page, setPage}) => {

    if(page){
        const {p, s} = page;
        return (
            <div className='flex gap-2 items-center justify-center p-2'>
                <button disabled={p <= 1} onClick={() => setPage({...page, p:p-1, s:s-8})} dis className={`py-0 font-semibold px-6 rounded-sm shadow shadow-gray-500 ${p<=1 && `opacity-25`} bg-gray-200`}>Prev</button>
                <span className='font-bold'>{p}</span>
                <button onClick={() => setPage({...page, p:p+1, s:s+8})} className='py-0 font-semibold px-6 rounded-sm shadow shadow-gray-500 bg-gray-200'>Next</button>
            </div>
        );
    }else {
        return <></>
    }
}

export default Pagination;
