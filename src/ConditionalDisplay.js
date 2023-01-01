import React from 'react'

function ConditionalDisplay(props) {
  return (
    <div>{props.isVisible ? props.children : null}</div>
  )
}

export default ConditionalDisplay