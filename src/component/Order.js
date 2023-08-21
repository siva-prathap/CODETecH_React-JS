import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'

const Order=()=>{
    const navigate=useNavigate()
    return (
      <div>
       <h1> Order Confirmed</h1>
        <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
        
    )
  }

export default Order