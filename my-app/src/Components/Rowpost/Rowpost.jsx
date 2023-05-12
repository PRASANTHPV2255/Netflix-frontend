import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../Axios'
import {  imageUrl } from '../../Constants/Constants'
import youtube from 'react-youtube'


function Rowpost(props) {
  const [movies, setMovies] = useState([])
  const [urlid, setUrlid] = useState('')
  useEffect(() => {
     axios.get(props.url).then((response)=>{
      console.log(response.data.results);
      setMovies(response.data.results)
     }).catch(err=>{
      // alert('network error')
     })
  }, [])
  
  
  const handlemovie = (id)=>{
   console.log(id);
  }
  
  return (
    
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          
          {movies.map((obj)=>
         
            <img  className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Card image poster" />
          
          )}
         


        </div>
        
    </div>
    
  )
}

export default Rowpost