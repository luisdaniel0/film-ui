import React from 'react'
import FilmItem from './FilmItem'


function FilmGrid({ films, isLoading }) {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (<section className="cards">
    {films.map(film => (
      <FilmItem film={film}></FilmItem>
    ))}
  </section>
  )



}

export default FilmGrid