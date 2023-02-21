import React from 'react'
import {useNavigate} from "react-router-dom"
import "./LoginPage.css"
function RegistrationPage() {
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
                <span className="label-text">Name</span>
                <input type="text" name="newName"/>
            </label>
            <label>
                <span className="label-text">Last Name</span>
                <input type="text" name="newLastName"/>
            </label>
            <label>
                <span className="label-text">Email</span>
                <input type="text" name="newEmail"/>
            </label>
            <label className="password">
                <span className="label-text">Password</span>
                <input type="password" name="newPassword"/>
            </label>

            
            <br></br>
           
            <button className="submit"  name="sign">Sign In</button>
            
            
            
        </form>
        
    </div>
    </div>
  )
}

export default RegistrationPage
