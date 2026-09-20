import React from 'react'

const List = () => {
    const colors =["Red","Green","Yello","White","Blue"]
  return (
    <div>
        <h1>My Fav Colors: </h1>
        <ol>
            {colors.map((c)=><li>Color:{c}</li>)}
        </ol>

    </div>
  )
}

export default List