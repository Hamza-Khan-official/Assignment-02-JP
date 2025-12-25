import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Commponents/button'
import Input from './Commponents/Input'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Button label = "login"/>
      <Button label = "ENter"/>

      <Input placeholder = "ENter Your Name" label = "Name"/>
      <Input placeholder = "ENter Your Email" label = "Email"/>
      <Input placeholder = "Enter Your Age" label = "Age"/>
    </>
  )
}

export default App
