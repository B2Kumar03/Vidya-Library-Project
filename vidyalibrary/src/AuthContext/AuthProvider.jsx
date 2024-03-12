import React, { createContext, useState } from 'react'

const AuthContext=createContext()

const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated]=useState(false);
  function setAuth(){
    setIsAuthenticated((prev)=>!prev)
  }
  return (
    <AuthContext.Provider value={{isAuthenticated,setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext };