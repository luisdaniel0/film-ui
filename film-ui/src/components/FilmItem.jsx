import React from 'react'

const FilmItem = ({film}) => {
  return (
    <div className="card">
      <h1>{film.title}</h1>
      <ul>
        <li>
          <strong>Description</strong>{film.description}
        </li>
      </ul>
    </div>
    
    

  )
}

export default FilmItem