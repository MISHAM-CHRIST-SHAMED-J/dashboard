import React from 'react'
import Sidebar from './sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Login from './Login';


function Portal() {
  return (
    
    <div className="wrapper">
    <Sidebar></Sidebar>
    <div id="content-wrapper" className="d-flex flex-column col-lg-10">
    <div id="content">
     <Navbar></Navbar>
     <Outlet/>

     </div>
      </div>
    </div>








  )
}

export default Portal
