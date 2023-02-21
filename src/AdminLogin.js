import React from 'react'
import {useNavigate} from "react-router-dom"
import "./LoginPage.css"
function AdminLogin() {
  return (
    <div>
       <div className="container">
        <br></br>
        <br></br>
        
        <h1 className="text-center">Recovery Project</h1>
        <h1 className="text-center">Admin Page</h1>
        <br>
        </br>
     
        <form className="registration-form">
            <label>
                <span className="label-text">Name</span>
                <input type="text" name="adminName"/>
            </label>
           
            <label className="password">
                <span className="label-text">Password</span>
                <input type="password" name="adminPassword"/>
            </label>

            
            <br></br>
           
            <button className="submit"  name="sign">Sign In</button>
            
            
            
        </form>
        
    </div>
    </div>
  )
}

export default AdminLogin
