import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'
import ct from './codetech.png'
import './Project1.css'

const Navbar=()=>{
  const auth=useAuth()

    return (
      <div>
        
           <nav className='nav1'>
           
           <div className="abc">
           <img src={ct} className='ct1'/>
            <h1> <span className="logo">CODE</span>TecH </h1>
            </div>
            <div className='def'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Courses">Courses</NavLink>
            {/* <NavLink to='/Product'>Product</NavLink> */}
            <NavLink to="/profile">Profile</NavLink>
            {!auth.user && 
            <NavLink to="/login">Login</NavLink>}
            </div>
        </nav>
      </div>
    )
  }


export default Navbar