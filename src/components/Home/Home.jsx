import { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../config/movieApi";

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY


const Home = () => {

    useEffect(()=>{
        const movieText = "Harry"
        const fetchMovies = async () => {
            const response = await movieApi.get(`?apiKey=${OMDB_API_KEY}&s=${movieText}&type=movie`)
            .catch((err) => {
                console.log("Error :", err);
            });

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