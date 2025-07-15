import React from 'react';

const Card = ({id, img, name}) => {
    return (
            <div className={`flex gap-3 m-2 px-2 items-center shadow shadow-gray-500 rounded-md `}>
                <b>{id}</b>
                <img src={img}className='w-10 rounded-full shadow ' />
                <p className='font-medium'>{name}</p>
            </div>
    );
}

export default Card;
