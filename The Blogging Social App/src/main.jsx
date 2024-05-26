import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  BrowserRouter,
  Router,Route,
  Routes
} from "react-router-dom";
import './index.css'
import Login from './Pages/login/Login.jsx';
import Profile from './Pages/profile/Profile.jsx';
import Register from './Pages/register/Register.jsx';
import Home from './Pages/home/home.jsx';


function Main() {
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