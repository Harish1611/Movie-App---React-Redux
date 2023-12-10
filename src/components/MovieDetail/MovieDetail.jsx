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
          <div className="text-[40px] text-fontPrimary">{data.Title}</div>
          <div className="pl-[3px] mt-[20px] text-fontSecondary flex">
          <span className="mr-[20px]" >
            IMDB Rating <i className="fa fa-star text-[#ff9e00]"></i> :{data.imdbRating}
          </span>
          <span className="mr-[20px]">
            IMDB Votes <i className="fa fa-thumbs-up text-[#fafafa]"></i> :{data.imdbVotes}
          </span>
          <span className="mr-[20px]">
            Runtime <i className="fa fa-film text-[#BFD5D6] "></i> :{data.Runtime}
          </span>
          <span className="mr-[20px]">
            Year <i className="fa fa-calendar text-[peachpuff]"></i> :{data.Year}
          </span>
          </div>
        </div>
        
        <div className=" mt-[20px] leading-8">{data.Plot}</div>
        <div className="movie_info">
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
      </div>


      {/* Right Section */}
      <div className="ml-[30px] w-full">
        <img className="h-full w" src={data.Poster} alt={data.Title} />
      </div>

    </div>
  );
};

export default MovieDetail;
