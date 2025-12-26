import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Commponents/button'
import Input from './Commponents/Input'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div style={{"border":"2px solid yellow", display:"flex"}}>
      {/* <Button label="login" />
      <Button label="SignUP" /> */}

      <div style={{"border":"2px solid red", maxWidth:"100%", gap:30 , backgroundColor: "#ffffff54"}}>
        <h1>Login Form</h1>
        {/* <Input placeholder = "ENter Your Name" label = "Name"/> */}
        <Input field="Enter Email" placeholder="ENter Your Email" label="Email" />
        <Input field="Enter Passward" placeholder="Enter Your Passward" label="Passward" />
      </div>

      <div style={{backgroundColor: "#ffffff75", gap:"5 0" ,maxWidth:"100%"}}>
        <h1>SignUP Form</h1>
        <Input field="Enter Name" placeholder="Enter Your Name" />
        <Input field="Enter Email" placeholder="Enter Your Email" />
        <Input field="Enter Passward" placeholder="Enter Your Passward" />
        <Input field="Enter Conform Passward" placeholder="Enter Your Conform Passward" />
        <Input field="Enter Phone" placeholder="Enter Your Phone" />
      </div>

    </div>
  )
}

export default App
