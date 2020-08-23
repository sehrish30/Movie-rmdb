import React from 'react'
import {StyledMovieThumb} from '../styles/StyledMovieThumb'
import {Link} from '@reach/router';
import PropTypes from 'prop-types';

const MovieThumb = ({image, movieId, clickable}) => {
    return (
        <StyledMovieThumb>
        <Link to={`/${movieId}`}>
         {clickable ? (<img className="clickable" src={image} alt="moviethumb"/>):(<img src={image} alt="moviethumb"/>)}
         </Link>
        </StyledMovieThumb>
    )
}

MovieThumb.propTypes={
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool
}

export default MovieThumb
