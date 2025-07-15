import React from 'react';

const Search = ({placeholder}) => {
    return (
        <div className='p-2'>
            <input className='py-1 px-5 border border-gray-400 w-full rounded-md ' placeholder={`Search ${placeholder}`} />
        </div>
    );
}

export default Search;
