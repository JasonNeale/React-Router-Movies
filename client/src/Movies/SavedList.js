import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const SavedList = (props) => (
    <div className="saved-list">
        <h3>Saved Movies:</h3>
        <nav>
            {props.list.map(movie => (
                <span className="saved-movie"><NavLink exact to={`/movies/${movie.id}`}>{movie.title}</NavLink></span>
            ))}
        </nav>
        <Link to="/"><div className="btn btn-primary">Home</div></Link>
    </div>
);

export default SavedList;