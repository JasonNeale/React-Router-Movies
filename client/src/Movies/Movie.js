import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from "../Movies/MovieCard";

const Movie = (props) => {
  const [movie, setMovie] = useState();
 
    useEffect(() => {
        const id = props.match.params.id;
       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params.id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return <MovieCard key={movie.id} movie={movie} {...props} />;
}

export default Movie;
