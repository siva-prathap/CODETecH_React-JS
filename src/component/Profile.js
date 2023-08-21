import React from "react";
import { useAuth } from "./Auth";
const Profile=()=>{
    const auth=useAuth()
    const handlelogout=()=>{
        auth.logout()
    }
    return(
        <div>
           <h1>Welcome User</h1> 
            <button onClick={handlelogout}>logout</button>
        </div>
    )
}
export default Profile