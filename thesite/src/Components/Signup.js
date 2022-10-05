import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'
const Signup = () => {

  const  [email, setEmail] = useState("")
  const  [password, setPassword] = useState("")
  const  [error, setError] = useState("")

  const {createUser} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit =  async (e) =>{
    e.preventDefault()
    setError("")
    try{
      await createUser(email, password)
      navigate("/account")
      

    } catch(e){
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <div>
        <h1>Sign Up!</h1>
        <div>Already a member? <Link to="/">Sign In</Link></div>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Email address</label>
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email} ></input>
            </div>

            <div>
                <label>Password</label>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}></input>
            </div>
            <button>Signup</button>

        </form>




    </div>
  )
}

export default Signup