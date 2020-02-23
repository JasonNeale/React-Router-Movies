import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

const MovieCard = (props) => {
    const [movieData, setMovieData] = useState([])

    const movieTitleFixed = props.movie.title
    const API_URL = `http://www.omdbapi.com/?t=${movieTitleFixed}&apikey=d444687c`

    useEffect(() => {
        axios.get(API_URL).then(res => {setMovieData(res.data)}).catch(err => {console.log('Axios: ', err)})}, [])

    let location = useLocation();

    if (location.pathname !== "/") {
        console.log('Movie Data: ', movieData)
        return (
            <div className="col card-big">
                <div className="row title-row"><div className="card-title-big">{movieData.Title}</div></div>
                <div className="row">
                    <div className="col-6 card-text">
                        <p><span className="card-title-2-big">Rated:</span><br/><span>{movieData.Rated}</span></p>
                        <p><span className="card-title-2-big">Director:</span><br/>{movieData.Director}</p>
                        <p><span className="card-title-2-big">Metascore:</span><br/>{movieData.Metascore}</p>
                        <p><span className="card-title-2-big">Actors:</span><br />{movieData.Actors}</p>
                        <p><span className="card-title-2-big">Plot:</span><br/><span>{movieData.Plot}</span></p>
                    </div>
                    <div className="col-6 poster-container">
                        <img className="poster" src={movieData.Poster} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Link to={`/movies/${props.movie.id}`}>
            <div className="col card">
                <div className="card-title">{props.movie.title}</div>
                <div className="card-body">
                    <div className="card-text">
                        <p><span className="card-title-2">Director:</span><br />{props.movie.director}</p>
                        <p><span className="card-title-2">Metascore:</span><br />{props.movie.metascore}</p>
                        <p><span className="card-title-2">Actors</span><br/>{props.movie.stars.map(star => (<span key={star}><span className="movie-star">{star}</span><br/></span>))}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard
