import React, { useEffect, useState } from 'react'


function HookCounter() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    document.title=`You Clicked ${count} Times`;
  })
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} Times</button>
    </div>
  )
}

export default HookCounter