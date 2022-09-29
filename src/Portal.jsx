import React from 'react'
import Sidebar from './sidebar';
import Navbar from './Navbar';
import {Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'


function Portal(){
    const navigate= useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("appToken"))
        {navigate("/")}
    },[])
    return(
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

export default Portal;