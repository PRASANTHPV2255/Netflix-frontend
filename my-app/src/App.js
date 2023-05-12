import React from 'react'

import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import { Action, comedy, documentry, horror, Originals, romance } from './Urls'
import { BrowserRouter, Route, Routes }from 'react-router-dom'
import LandingLogin from './LoginPage/LandingLogin';
import LoginPage from './LoginPage/LoginPage';
import NetMainpage from './NetMainpage';
import Signuppage from './LoginPage/Signuppage';
import Passwordpage from './LoginPage/Passwordpage';

function App() {
  return (
    <div className="App">
          {/* <Navbar/>
      <Banner/>
      <Rowpost title='Netflix Originals' url={Originals}/>
      <Rowpost title='Action' isSmall url={Action}/>
      <Rowpost title='Comedy' isSmall url={comedy}/>
      <Rowpost title='Horror' isSmall url={horror}/>
      <Rowpost title='Romance' isSmall url={romance}/>
      <Rowpost title='Documentry' isSmall url={documentry}/> */}
      <BrowserRouter>
  
      <Routes>
        <Route path='/' element={<LandingLogin/>}/>
        <Route path='/LoginLanding' element={<LandingLogin/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/main' element={<NetMainpage/>}/>
        <Route path='/signup' element={<Signuppage/>}/>
        <Route path='/passwordpage' element={<Passwordpage/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
