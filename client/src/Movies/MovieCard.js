import React from 'react'
import { Link } from 'react-router-dom'
//import { Button } from 'react-bootstrap';

const MovieCard = (props) => {
    return (
        <Link to={`/movies/${props.movie.id}`}>
            <div className="col card">
                <div className="card-title">{props.movie.title}</div>
                <div className="card-body">
                    <p className="card-text">
                        <p>
                            <span className="card-title-2">Director:</span>
                            <br />
                            {props.movie.director}
                        </p>

                        <p>
                            <span className="card-title-2">Metascore:</span>
                            <br />{props.movie.metascore}
                        </p>

                        <p>
                            <span className="card-title-2">Actors</span>
                            {props.movie.stars.map(star => (<div key={star} className="movie-star">{star}</div>))}
                        </p>
                    </p>
                    <Link to="" className="btn btn-primary card-btn">Save</Link>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard
