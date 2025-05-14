import React, { useState } from 'react'

const List = () => {

    const [itemIndex, setItemIndex] = useState(-1)

    const items = ["alishan", "AMit", "hitisha", "vibhuti"]

    return (
        <div>
            <ul className='list-group'>
                {
                    items.map((item, index) => <li key={item} onClick={() => setItemIndex(index)}
                        className={index==itemIndex ? 'list-group-item active' : 'list-group-item'}
                    > {index + 1} person is {item}</li>)
                }

            </ul>
        </div>
    )
}

export default List