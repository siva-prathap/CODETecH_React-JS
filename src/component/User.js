import React from 'react'
import { Outlet } from 'react-router-dom'

// const User = ()=> {
//   return (
//     <div>
//         <h2>User1</h2>
//         <h2>User2</h2>
//         <h2>User3</h2>
//         <h2>User4</h2>
//         <h2>User5</h2>
//         <Outlet/>
//     </div>
//   )
// }

// export default User
export default function User(){
  return(
    <div>
      <h1>User1</h1>
      <h1>User2</h1>
      <Outlet/>
    </div>
  )
}
