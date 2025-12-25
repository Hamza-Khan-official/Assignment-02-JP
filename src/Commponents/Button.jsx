import React from 'react'

const Button = (props) => {
    let UI = props.label
  return (
    <div>
        <button>{UI}</button>
        <br /><br />
    </div>
  )
}
export default Button;
