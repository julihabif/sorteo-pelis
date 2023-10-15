import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {faPen} from "@fortawesome/free-solid-svg-icons";
const Movie = ({movie,  toggleWatched, deleteMovie,editMovie}) => {
    return (
            <div className={'Todo'}>
                <p
                    onClick={() => toggleWatched(movie.id)}
                    className={`${movie.watched? "watched" : "unwatched"}`}>{movie.movie}
                </p>
                <div>
                    <FontAwesomeIcon icon={faTrash} onClick={() =>deleteMovie(movie.id)} />
                </div>
            </div>
    );
};

export default Movie;
