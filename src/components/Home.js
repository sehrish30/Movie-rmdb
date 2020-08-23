import React, {useState} from 'react'
import {API_URL, API_KEY, API_BASE_URL, POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config'
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';
import HeroImage from './elements/HeroImage';
import { useHomeFetch } from './hooks/useHomeFetch';
//import compoenents

import NoImage from './images/no_image.jpg';

const Home = () => {

   const [{state : {movies, currentPage, totalPages, heroImage},
       loading,
       error},
        fetchMovies
      ]=useHomeFetch();
   const [searchTerm, setSearchTerm] =useState('')

   if(!movies[0]) return <Spinner />
   if(error) return <div>Something went wrong...</div>

    return (
       <>
       <HeroImage 
       image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
       title={heroImage.original_title}
       text={heroImage.overview} 
       />
       <SearchBar/>
       <Grid header={searchTerm ? 'Search Result': 'Popular Movies'}>
       {movies.map(movie => (
          <MovieThumb key={movie.id} clickable 
          image={movie.poster_path ? 
            `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`:
             NoImage}
             movieId={movie.id}
             movieName={movie.original_title}
             ></MovieThumb>
       ))}
       </Grid>
      

       <Spinner />
       <LoadMoreBtn />
       </>
    )
}

export default Home
