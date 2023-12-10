import { useSelector } from "react-redux";
import { getAllMovies } from "../../state/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies); // getting movies data from store using getAllMovies
  console.log("Movie Listing", movies.Search);

  return (
    <div className="">
      <div className="mx-[20px] my-0 ">
        <h2 className="text-fontSecondary mb-[10px] font-normal">Movies</h2>
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 space-x-5 space-y-5">
          {movies.Response === "True" ? (
            movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
          ) : (
            <div className="">
              <h3> {movies.Error} </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
