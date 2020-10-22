import React from "react";

export function MovieList() {
  const movies = [
    { name: "36th chamber" },
    { name: "5th Deadly Venoms" },
    { name: "Man of Yron" },
  ];
  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return <li key={movie.name}>{movie.name}</li>;
        })}
      </ul>
    </div>
  );
}
