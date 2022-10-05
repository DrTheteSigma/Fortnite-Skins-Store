import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'
const ProtectedRoutes = ({children}) => {

    const {user} = UserAuth()
    if (!user){
        return <Navigate to="/"></Navigate>
    }
  return children
}

export default ProtectedRoutes