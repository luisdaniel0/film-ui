import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import FilmGrid from "./components/FilmGrid"



function App() {
  const [films, setFilms] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const result = await axios.get(`https://restapi-production-9aa5.up.railway.app/films`)
        setFilms(result.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchFilms();
  }, [])

  console.log(films)
  return (
    <div className="container">
      <FilmGrid isLoading={isLoading} films={films} />

    </div>
  );
}

export default App;
