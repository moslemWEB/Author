import React from 'react'

function Clicker({handleClick}) {
  return (
    <div>
        <button onClick={(e)=>{handleClick('a')}}>A</button>
        <button onClick={(e)=>{handleClick('b')}}>B</button>
        <button onClick={(e)=>{handleClick('c')}}>C</button>

    </div>
  )
}

export default Clicker