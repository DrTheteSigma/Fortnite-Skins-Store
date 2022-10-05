import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'
const Account = () => {
  const {user, logout} = UserAuth()


  const navigate = useNavigate()

  const handleLogout = async () =>{
    try {
      await logout()
      navigate("/")
      
    } catch (e) {
      console.log(e)
      
    }
  }


  return (
    <div>
    <h1>Account</h1>
    <p>Email is {user && user.email}</p>
    <button onClick={handleLogout}>Log out</button>


    </div>
  )
}

export default Account