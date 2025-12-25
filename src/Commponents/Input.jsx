import React from 'react'

const Input = (input) => {
    console.log(input)
  return (
    <div>
      <input placeholder={input.placeholder} type="text" />
      <br /><br />
    </div>
  )
}

export default Input
