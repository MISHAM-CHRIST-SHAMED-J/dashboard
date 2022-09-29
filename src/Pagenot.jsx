import React from 'react'
import logo from "./logo.jpg"
import { Link, useNavigate } from 'react-router-dom'



function Pagenot() {
  const navigate= useNavigate()
  return (
    <>
    <div className='pogo'><img src={logo} alt="" />
    <Link className='btn btn-primary' to="/portal/welcome">Homepage</Link></div>
    </>
  )
}

export default Pagenot