import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LandingLogin.css'

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />



function LandingLogin() {

    const nav=useNavigate()

    const login=()=>{
        nav('/Login')
    }
    const passwordpage=()=>{
        nav('/passwordpage')
    }

  return (

    <div className='top-header'>
       
       <>
        <nav className='nav-img'>
            <div className='logo-nav'>
            <div className='logo-img'>
        <img className='logo-image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        </div>
        <div className='nav-btn'>
            <button className='eng'>English</button>
            <button onClick={login}  className='nav-signin'>Sign in</button>
        </div>
        </div>
        </nav>
       

        <div className='main'>
            <h1>Unlimited movies, TV <br/>shows and more</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='login-input'>
                 <input className='input' type="text" required placeholder='Email Address'/>
                 <button className='get-start-button'  onClick={passwordpage} >Get Start</button>
            </div>
        </div>
        
         <div className='more-details'>
        <div className='first'>
            <div className='text'>
                <h1>Enjoy on your TV</h1>
                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png' alt='img'/>

        </div>

        <div className='first'>
        <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png' alt='img'/>

            <div className='text'>
                <h1>Watch everywhere</h1>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
           
        </div>

        <div className='first'>
            <div className='text'>
                <h1>Create profiles for kids</h1>
                <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
            </div>
            <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/kids/en-GB.png' alt='img'/>

        </div>

        <div className='first'>
        <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/en.png' alt='img'/>

            <div className='text'>
                <h1>Download your shows to watch offline</h1>
                <p>Save your favourites easily and always have something to watch.</p>
            </div>
            
        </div>
        </div>

        <div className='bottom-buttons'>
            <h1>Frequently Asked Questions</h1>
            <button>What is Netflix?</button>
            <button>How much does Netflix cost?</button>
            <button>Where can I watch?</button>
            <button>How do I cancel?</button>
            <button>What can I watch on Netflix?</button>
            <button>Is Netflix good for kids?</button>
        </div>
        <div>
        <div className='footer'>
            <div className='list'>
            <p>FAQ</p>
            <p>Account</p>
            <p>Investor Relations</p>
            <p>Ways to Watch</p>
        </div>
       
            <div className='list'>
            <p>Privacy</p>
            <p>Corporate Information</p>
            <p>Speed Test</p>
            <p>Only on Netflix</p>
      
        </div>
        
            <div className='list'>
            <p>Help Centre</p>
            <p>Media Centre</p>
            <p>Jobs</p>
            <p>Terms of Use</p>
        
        </div>
        
            <div className='list'>
            <p>Cookie Preferences</p>
            <p>Contact Us</p>
            <p>Legal Notices</p>
            
        </div>
        </div>
        </div>

        </>
    </div>
  )
}

export default LandingLogin