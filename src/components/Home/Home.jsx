import { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../config/movieApi";
import { useDispatch } from "react-redux";
import { addMovies } from "../../state/movies/movieSlice";

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY


const Home = () => {

    const movieText = "Harry";
    const dispatch = useDispatch();
    useEffect(()=>{
       
        const fetchMovies = async () => {
            const response = await movieApi.get(`?apiKey=${OMDB_API_KEY}&s=${movieText}&type=movie`)
            .catch((err) => {
                console.log("Error :", err);
            });

            dispatch(addMovies(response.data)); // dispatching the response form OMDB which saves the data in store
            console.log("Response from API:", response);
        };
        fetchMovies();
    },[])
  return (
    <div>
        <div className="" ></div>
        <MovieListing />
    </div>
  )
}

export default Home