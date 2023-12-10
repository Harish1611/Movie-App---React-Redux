import { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../state/movies/movieSlice";



const Home = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(fetchAsyncMovies()) 
       dispatch(fetchAsyncShows())     
    
    },[dispatch])


  return (
    <div>
        <div className="" ></div>
        <MovieListing />
    </div>
  )
}

export default Home