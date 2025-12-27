import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Commponents/button'
import Input from './Commponents/Input'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
        minHeight: "50vh",
        padding: "40px"
      }}
    >

      {/* LOGIN */}
      <div
        style={{
          color: "black",
          padding: "30px",
          backgroundColor: "#ffffff54",
          width: "340px",
          minHeight: "420px",
          boxSizing: "border-box",
          borderRadius: "8px"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>

        <Input field="Enter Email" placeholder="Enter Your Email" label="Email" />
        <Input field="Enter Password" placeholder="Enter Your Password" label="Password" />

        <br /><br /><br /><br />
        <Button label = "Login"/>

      </div>

      {/* SIGNUP */}
      <div
        style={{
          color: "black",
          padding: "30px",
          backgroundColor: "#ffffff46",
          width: "340px",
          minHeight: "420px",
          boxSizing: "border-box",
          borderRadius: "8px"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Sign Up</h2>

        <Input field="Enter Name" placeholder="Enter Your Name" />
        <Input field="Enter Email" placeholder="Enter Your Email" />
        <Input field="Enter Password" placeholder="Enter Your Password" />
        <Input field="Confirm Password" placeholder="Confirm Your Password" />
        <Input field="Enter Phone" placeholder="Enter Your Phone" />

        <br /><br />

        <div style={{alignItems:"center"}}>
          <Button label = "SignUP"/>
        </div>
      </div>

    </div>


  )
}

export default App
