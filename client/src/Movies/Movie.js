import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from "../Movies/MovieCard";

const Movie = (props) => {
    const [movie, setMovie] = useState()
 
    useEffect(() => {
        const id = props.match.params.id

        axios.get(`http://localhost:5000/api/movies/${id}`)
        .then(res => {setMovie(res.data)})
        .catch(err => {console.error(err)})
    },[props.match.params.id])
  
    //Uncomment this only when you have moved on to the stretch goals
    const saveMovie = () => {
        const addToSavedList = props.addToSavedList;
        console.log('Movie', movie)
        addToSavedList(movie)
    }

    if (!movie) {
        return <div>Loading movie information...</div>
    }

    return (
        <div>
            <div className="row card-container">
                <MovieCard key={movie.id} {...props} movie={movie} />
            </div>
            <div className="row text-center button-row">
                <div className="save-button btn btn-primary" onClick={saveMovie}>Save</div>
            </div>
        </div>
    )
}

export default Movie;