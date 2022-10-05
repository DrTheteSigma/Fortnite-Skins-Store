import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { UserAuth } from './context/AuthContext'
import { async } from '@firebase/util'

const Signin = () => {

  const  [email, setEmail] = useState("")
  const  [password, setPassword] = useState("")
  const  [error, setError] = useState("")

  const {signin} = UserAuth()
  const navigate = useNavigate()
  
  const handlesignin =  async(e) =>{
    e.preventDefault()
    try {
      await signin(email, password)
      navigate("/about")
    } catch (e) {
      console.log(e)
      
    }

  }
  return (
    <div>
        <h1>Sign In!</h1>
        <div>Don't have an account? <Link to="/signup">Sign up</Link></div>

        <form onSubmit={handlesignin}>
            <div>
                <label>Email address</label>
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email} ></input>
            </div>

            <div>
                <label>Password</label>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}></input>
            </div>
            <button>Sign in</button>

        </form>




    </div>
  )
}

export default Signin