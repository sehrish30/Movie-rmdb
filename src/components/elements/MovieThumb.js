import React from 'react'
import {StyledMovieThumb} from '../styles/StyledMovieThumb'
import {Link} from '@reach/router';

const MovieThumb = ({image, movieId, movieName, clickable}) => {
    return (
        <StyledMovieThumb>
        <Link to={`/${movieId}`}>
         {clickable ? (<img className="clickable" src={image} alt="moviethumb"/>):(<img src={image} alt="moviethumb"/>)}
         </Link>
        </StyledMovieThumb>
    )
}

export default MovieThumb
