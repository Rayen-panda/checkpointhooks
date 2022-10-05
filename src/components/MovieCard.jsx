import React from 'react'
import './components.css'


export default function MovieCard({movie ,deleteMovie}) {
  
  
  return (
      
      <div className='box1'>
            <h1>{movie.title}</h1>
            <h1>{movie.description}</h1>
            <img style={{width:"200px"}} src={movie.posterUrl} alt="" />
            <h1>{movie.rate}</h1>
            <button onClick={()=>deleteMovie(movie.id)} >remove card</button>
            
 
    </div>
    
  )
}
