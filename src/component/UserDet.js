import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDet= () => {
    const params=useParams()
    const id=params.userid
  return (
    <div>
        Details of User {id} 
    </div>
  )
}
export default UserDet;