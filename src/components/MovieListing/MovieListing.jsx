import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../state/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies); // getting movies data from store using getAllMovies
  const shows = useSelector(getAllShows); // getting shows data from store using getAllShows

  console.log("Movie Listing", movies.Search);

  return (
    <div className="">
      {/* Movies */}
      <div className="mx-[20px] my-0 ">
        <h2 className="text-fontSecondary mb-[10px] font-normal">Movies</h2>
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 space-x-6 space-y-6">
          {movies.Response === "True" ? (
            movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
          ) : (
            <div className="">
              <h3> {movies.Error} </h3>
            </div>
          )}
        </div>
      </div>

      {/* Shows */}

      <div className="mx-[20px] my-0 ">
        <h2 className="text-fontSecondary mb-[10px] font-normal">Shows</h2>
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 space-x-5 space-y-5">
          {shows.Response === "True" ? (
            shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
          ) : (
            <div className="">
              <h3> {shows.Error} </h3>
            </div>
          )}
        </div>
      </div>
  
    </div>
  );
};

export default MovieListing;
