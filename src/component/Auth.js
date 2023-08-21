import React, {useContext,useState} from "react";
const AuthContext=React.createContext(null)

const AuthProvider=(props)=>{
    const [user,setUser]=useState(null)
    const [userList,setUserList]=useState([{username:'',password:''}])
    const login=(user)=>{
        setUser(user)
    }
    const logout=()=>{
        setUser(null)
    }
    const signup=(user,password)=>{
        setUserList([...userList,{username:user,password:password}])
    }
    return <AuthContext.Provider value={{user,login,logout,signup,userList}}>
        {props.children}
    </AuthContext.Provider>
}
const useAuth=()=>{
    return useContext(AuthContext)
    
}
export{AuthProvider,useAuth}