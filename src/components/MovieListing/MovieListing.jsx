import { useSelector } from "react-redux"
import { getAllMovies } from "../../state/movies/movieSlice"

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies)
  return (
    <div>MovieListing</div>
  )
}

export default MovieListing