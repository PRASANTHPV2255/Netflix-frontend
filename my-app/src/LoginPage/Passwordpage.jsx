import React from 'react'
import './LoginPage.css'
import LoginNav from './LoginNav'
import { useNavigate } from 'react-router-dom'

function Passwordpage() {
    const nav=useNavigate()
     
    const landingpage=()=>{
        nav('/LoginLanding')
    }
   
    
  return (
    <div>
         <div className='Login-page'>
      <LoginNav/>
    <div className='Login-box'>
     <h2 className='passhead'>Password</h2>

     <form action="#">

    

      <div className='input-box'>
        <input type="Password" required />
        <label>Password</label>
      </div>
       
      <div className="forgot-pass">
        <a href="#">Forgot your Password</a>
      </div>
       
      <button type='submit'  className="btn">Login</button>
       
       <div className="signup-link">
        <a onClick={landingpage}>Home</a>
       </div>
       
     </form>
    </div>
    </div>
    </div>
  )
}

export default Passwordpage