
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage.js';
import AdminLogin from './AdminLogin.js';
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    
<div className='App'>

<Router>
  <Routes>
  <Route exact path="/" element={<LoginPage/>}/>
  <Route exact path="/RegistrationPage" element={<RegistrationPage/>}/>
  <Route exact path="/AdminLogin" element={<AdminLogin/>}/>

  </Routes>
</Router>
</div>
     
  );
}

export default App;
