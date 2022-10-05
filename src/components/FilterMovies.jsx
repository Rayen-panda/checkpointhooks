import React from 'react'



export default function FilterMovies({setFilterd , }) {
  const handleChange = (e) => {
      setFilterd (e.target.value) 
    }

  return (
    <div>
        
        
        <input type="text" placeholder='search for movie' onChange={handleChange}/>
    </div>
  )
}
