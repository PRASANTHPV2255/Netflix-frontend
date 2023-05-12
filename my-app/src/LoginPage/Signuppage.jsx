import React, { useState } from 'react'
import './LoginPage.css'
import LoginNav from './LoginNav'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Signuppage() {
    const nav=useNavigate()

    const login=()=>{
        nav('/login')
    }
    
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')

    const register=async(event)=>{
        event.preventDefault()

        const api='http://localhost:5000/usersignup'

        const user=await axios.post(api,{Name,Email,Password,ConfirmPassword})
        await console.log(user.data);
       
        if(user.data.Token){
            await alert(user.data.msg)
            nav('/main')
        }
        else{
            await alert(user.data.msg)
        }
    }
  
  return (
    <div className='Login-page'>
      <LoginNav/>
    <div className='Login-box'>
     <h2>Signup</h2>

     <form action="#">
     <div className='input-box'>
        <input type="text" required onChange={(e)=>setName(e.target.value)}/>
        <label>Name</label>
      </div>

      <div className='input-box'>
        <input type="text" required onChange={(e)=>setEmail(e.target.value)}/>
        <label>Email</label>
      </div>

      <div className='input-box'>
        <input type="Password" required onChange={(e)=>setPassword(e.target.value)}/>
        <label>Password</label>
      </div>
      <div className='input-box'>
        <input type="Password" required onChange={(e)=>setConfirmPassword(e.target.value)}/>
        <label>Confirm Password</label>
      </div>
       
      <div className="forgot-pass">
        <a href="#">Need help for signup?</a>
      </div>
       
      <button type='submit' className="btn" onClick={register}>Signup</button>
       
       <div className="signup-link">
        <a onClick={login}>Login</a>
       </div>
       
     </form>
    </div>
    </div>
   
  )
}

export default Signuppage