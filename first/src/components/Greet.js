// rfce
import React from 'react'

function Greet(props) {
  return (
    <div>
      <h1>Hello {props.name} also known as {props.nickname}</h1>
      {props.children}
    </div>
  )
}

export default Greet