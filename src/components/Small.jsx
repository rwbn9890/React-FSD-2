import React from 'react'

const Small = ({data}) => {

  return (
    <div>
        <h2>Username: {data.name}</h2>
        <h2>email: {data.email}</h2>
    </div>
  )
}

export default Small