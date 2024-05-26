import React from 'react'
import Home from './Pages/home/home'
import Profile from './Pages/profile/Profile'
import Login from './Pages/login/Login'
import Register from './Pages/register/Register'
import {
    BrowserRouter
    ,Route,
    Routes
  } from "react-router-dom";


function App() {
    return (
      <>
        <BrowserRouter basename='/The-Blogging-Social-App-main'> 
          <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/Profile' element={<Profile/>}/>
              <Route path='/register' element={<Register/>}/>
           </Routes>
          <Footer/> 
        </BrowserRouter> 
        
      </>
    );
  }
export default App;
