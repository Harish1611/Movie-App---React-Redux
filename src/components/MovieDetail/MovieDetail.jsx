import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrShowDetail,
  getMovieOrShowDetails,
} from "../../state/movies/movieSlice";
const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();

  const data = useSelector(getMovieOrShowDetails);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
  }, [dispatch, imdbID]);
  return (
    <div className="flex justify-evenly px-[40px] py-0 text-fontPrimary font-normal">
      {/* Left Section */}
      <div className="">
        <div className="">
          <div className="">{data.Title}</div>
          <span className="">
            IMDB Rating <i className="fa fa-star"></i> :{data.imdbRating}
          </span>
          <span className="">
            IMDB Votes <i className="fa fa-thumbs-up"></i> :{data.imdbVotes}
          </span>
          <span className="">
            Runtime <i className="fa fa-film"></i> :{data.Runtime}
          </span>
          <span className="">
            Year <i className="fa fa-calendar"></i> :{data.Year}
          </span>
        </div>
        
        <div className="">{data.Plot}</div>
        <div className="">
          <span>Director</span>
          <span>{data.Director}</span>
        </div>

        <div className="">
          <span>Starts</span>
          <span>{data.Actors}</span>
        </div>

        <div className="">
          <span>Generes</span>
          <span>{data.Genere}</span>
        </div>

        <div className="">
          <span>Language</span>
          <span>{data.Language}</span>
        </div>

        <div className="">
          <span>Awards</span>
          <span>{data.Awards}</span>
        </div>
      </div>


      {/* Right Section */}
      <div className="">
        <img src={data.Poster} alt={data.Title} />
      </div>

    </div>
  );
};

export default MovieDetail;
