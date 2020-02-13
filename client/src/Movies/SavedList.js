import React from 'react';
import { Link } from 'react-router-dom'

const SavedList = (props) => (
    <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (<span className="saved-movie">{movie.title}</span>))}
        <Link to="/"><div className="btn btn-primary">Home</div></Link>
    </div>
);

export default SavedList;