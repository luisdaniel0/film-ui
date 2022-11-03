import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import FilmGrid from "./components/FilmGrid";
import Modal from "./components/Modal";

function App() {
  const [films, setFilms] = useState([]);
  
  const fetchFilms = async () => {
    const result = await axios.get(
      `https://restapi-production-9aa5.up.railway.app/films`
      );
      const result2 = await axios.get(`
    https://ghibliapi.herokuapp.com/films`);

    

    let filterData = result.data.map((data) => {
      let foundImg = result2.data.find((img) => {
        return img.title === data.title;
      });
      if (foundImg) {
        data.image = foundImg.image;
        return data;
      }
    });

    setFilms(filterData);
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <div className="container">
      {console.log(films)}
      <FilmGrid  films={films}/>
      <Modal />
    </div>
  );
}

export default App;