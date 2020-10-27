import React, { useEffect, useState } from "react";
import Filter from "../Filter";
import Movie from "./Movies";

// const movies = [
//   { name: "36th chamber" },
//   { name: "5th Deadly Venoms" },
//   { name: "Man of Yron" },
// ];

// myApi = 00cc8076e871d622a8ff2452eaa31fdb

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key=";

const CONFIG_URL = "https://api.themoviedb.org/3/configuration?api_key=";

export function MovieList() {
  
  console.log(process.env.REACT_APP_MOVIE_API);
  const [filter, setFilter] = useState("");
  const [ movies, setMovies ] = useState([]);
  const [ config, setConfig ] = useState([]);

  //https://api.themoviedb.org/3/configuration?api_key=<<api_key>>

  const getMovies = async () => {
    try {
      const res = await fetch(API_URL + process.env.REACT_APP_MOVIE_API);
      const movies = await res.json();
      setMovies(movies.results);
    } catch (e) {
      console.error(e);
    }
  };

  const getConfig = async () => {
    try {
      const res = await fetch(CONFIG_URL + process.env.REACT_APP_MOVIE_API);
      const config = await res.json();
      setConfig(config);
    } catch (e) {
      console.error(e);
    }
  };


  useEffect(() => {
    getMovies();
    getConfig();
  }, []);

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <ul className="movies-list">
        {movies
          .filter((movie) => {
            return movie.title.toLowerCase().includes(filter.toLowerCase());
          })
          .map((movie) => {
            return <Movie key={movie.id} config={config} movie={movie} />;
          })}
      </ul>
      
      {/*<div ref={ulRef}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(ref.current.value);
        }}
      >
        <input ref={ref} />
        <button />
      </form> </div>*/}
    </div>
  );
}

// const ulRef = useRef(null);
// const ref = useRef(null);
// console.log("ulRef", ulRef);
