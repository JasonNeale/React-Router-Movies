import React, { useState, useEffect } from 'react'
import axios from 'axios'

import MovieCard from './MovieCard'

const MovieList = (props) => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        const getMovies = () => {
            axios.get('http://localhost:5000/api/movies')
            .then(res => {setMovies(res.data)})
            .catch(err => {console.error('Server Error', err)})
        }
    
        getMovies()
    }, [])
  
    return (
        <div className="row card-container">
            {movies.map(movie => (<MovieCard key={movie.id} movie={movie} />))}
        </div>
    )
}

export default MovieList
