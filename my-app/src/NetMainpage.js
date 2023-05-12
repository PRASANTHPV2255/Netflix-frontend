import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Rowpost/Rowpost'
import { Action, Originals, comedy, documentry, horror, romance } from './Urls'

function NetMainpage() {
  return (
    <div>
              <Navbar/>
      <Banner/>
      <Rowpost title='Netflix Originals' url={Originals}/>
      <Rowpost title='Action' isSmall url={Action}/>
      <Rowpost title='Comedy' isSmall url={comedy}/>
      <Rowpost title='Horror' isSmall url={horror}/>
      <Rowpost title='Romance' isSmall url={romance}/>
      <Rowpost title='Documentry' isSmall url={documentry}/>
    </div>
  )
}

export default NetMainpage