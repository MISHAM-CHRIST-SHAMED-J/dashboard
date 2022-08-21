import React from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {
    const navigate=useNavigate()
   let user="mishamshibin2512@gmail.com"
   let pass="Misham@25"
    const username=document.getElementById("usr")
    const password=document.getElementById("psw")
    const login=()=>{
        if(username.value === user && password.value === pass){
            navigate("/portal")
        }else{
            alert("Wrong credentials")
           
        }
           
    }
  return (
    <div>
        <h1>LOGIN</h1>
        <label>Username</label>
        <input  id="usr" type="text" /><br />
        <label>Password</label>
        <input  id="psw" type="password" /><br />
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login;