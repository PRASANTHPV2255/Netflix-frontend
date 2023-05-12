import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'
import LoginNav from './LoginNav'
import axios from 'axios'

function LoginPage() {
  const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const nav=useNavigate()

     
    const api='http://localhost:5000/userlogin';

    const userlogin=async(event)=>{
        
        event.preventDefault()
      

        const usercheck=await axios.post(api,{Email,Password})
        // console.log(usercheck.data);

       if(usercheck.data.Token){
        await alert('Login success')
        nav('/main')
       }
       else{
        await alert(usercheck.data.msg)
       }
       
       
    }
   
    const signup=()=>{
      nav('/signup')
  }
   
  return (
  
    <div className='Login-page'>
      <LoginNav/>
    <div className='Login-box'>
     <h2>Login</h2>

     <form action="#">

      <div className='input-box'>
        <input type="text" required onChange={(e)=>setEmail(e.target.value)}/>
        <label>Email</label>
      </div>

      <div className='input-box'>
        <input type="Password" required onChange={(e)=>setPassword(e.target.value)}/>
        <label>Password</label>
      </div>
       
      <div className="forgot-pass">
        <a href="#">Forgot your Password</a>
      </div>
       
      <button type='submit' onClick={userlogin} className="btn">Login</button>
       
       <div className="signup-link">
        <a onClick={signup}>Signup</a>
       </div>
       
     </form>
    </div>
    </div>
   
  )
}

export default LoginPage