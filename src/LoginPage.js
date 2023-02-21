import React from 'react'
import RegistrationPage from './RegistrationPage.js';
import {useNavigate} from "react-router-dom"
import "./LoginPage.css"
function LoginPage() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <br></br>
        <br></br>
        
        <h1 className="text-center">Recovery Project</h1>
        <br>
        </br>
     
        <form className="registration-form">
            <label>
                <span className="label-text">Email</span>
                <input type="text" name="email"/>
            </label>
            <label className="password">
                <span className="label-text">Password</span>
                <input type="password" name="password"/>
            </label>
            
            <br></br>
            <button className="submit"  name="Login">Login</button>
            <button className="submit"  name="sign" onClick={()=>{navigate("/RegistrationPage")}} >Sign In</button>
            <button className="submit"  name="admin" onClick={()=>{navigate("/AdminLogin")}}>Admin</button>
            
            
        </form>
        
    </div>
    </div>
  )
}

export default LoginPage
