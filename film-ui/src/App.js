import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import FilmGrid from "./components/FilmGrid"
import Modal from "./components/Modal"



function App() {
  const [films, setFilms] = useState([])
  const [poster, setPoster] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const result = await axios.get(`https://restapi-production-9aa5.up.railway.app/films`)
        const result2 = await axios.get(`https://ghibliapi.herokuapp.com/films`)

        setFilms(result.data)

        setPoster(result2.data)
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
      <FilmGrid isLoading={isLoading} films={films} poster={poster} />
      <button>Show Film</button>
      <Modal />

    </div>
  );
}

export default App;

