import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext/AuthProvider'

const PrivateRotes = ({children}) => {
 const navigate=useNavigate()
 const {isAuthenticated}=useContext(AuthContext)
 if(isAuthenticated){
    return <>
    {children}
    </>
 }
 else{
    navigate('/login')
 }
}

export default PrivateRotes