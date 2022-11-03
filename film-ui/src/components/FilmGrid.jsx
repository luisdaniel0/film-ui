import React, { useEffect, useState } from 'react'
import FilmItem from './FilmItem'



function FilmGrid({ films, isLoading, poster }) {
  
  
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (<section className="cards">
    {films.map(film => (
      <FilmItem poster={poster} film={film}></FilmItem>
      //onClick={()=>setVisible(true)}
    ))}
      
  </section>
  )



}

export default FilmGrid