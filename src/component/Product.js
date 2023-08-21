import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product=()=>{
    return (
      <div>
        <input type='search' placeholder='search'/>
        <nav>
            <Link to="new">New</Link>
            <Link to="best">Best</Link>
        </nav>
        <Outlet/>
      </div>
    )
  }

export default Product