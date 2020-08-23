import {useState, useEffect, useCallback} from 'react';
import { POPULAR_BASE_URL} from '../../config';

export const useHomeFetch=(searchTerm)=>{
    const [state, setState]= useState({movies: []})
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState(false);

    console.log(state);

    const fetchMovies = useCallback(async endpoint =>{
        setError(false);
        setLoading(true);

        const isLoadMore= endpoint.search('page');

        try{
          const result= await(await fetch(endpoint)).json();
          setState(prev=>({
              ...prev,
              movies: isLoadMore !==-1 ?
               [...prev.movies,...result.results]: [...result.results],
              heroImage: prev.heroImage || result.results[0],
              currentPage: result.page,
              totalPages: result.total_pages
          }))
        }catch(error){
          setError(true);
          console.log(error);
        }
        setLoading(false); 
    },[])

    useEffect(()=>{
      if(sessionStorage.homeState){
        // console.log("Grabbing from session storage")
        setState(JSON.parse(sessionStorage.homeState))
        setLoading(false);
      }else{
        // console.log("Grabbing from API")
        fetchMovies(POPULAR_BASE_URL)
      }
    },[fetchMovies])

    useEffect(()=>{
      if(!searchTerm){
        // console.log("Writing session")
         sessionStorage.setItem('homeState', JSON.stringify(state))
      }
    }, [searchTerm, state])

    return [{state, loading, error}, fetchMovies];
}