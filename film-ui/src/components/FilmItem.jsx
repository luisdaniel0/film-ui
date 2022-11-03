import React from 'react'

const FilmItem = ({ film, poster }) => {

  return (
    <div className="card">
      <h1>{film.title}</h1>
      <ul>
        <li>
          <strong>Description: </strong>{film.description}
        </li>
        
          <img src={film.image}></img>
      
        <div>
          
        </div>
      </ul>
    </div>



  )
}

export default FilmItem