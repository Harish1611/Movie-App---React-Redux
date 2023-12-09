
const MovieCard = ({data}) => {

  console.log("Movie Card", data)
  return (
    <div  className="bg-secondary cursor-pointer">
      <div className="">
       <div className="h-[300px]">
        <img src={data.Poster} className="w-full h-full" alt={data.Title} />
       </div>
       <div className="p-[20px]">
        <div className="text-fontPrimary ">
          <h4 className="text-[16px] font-normal mb-[10px]"> {data.Title}</h4>
          <p>{data.Year}</p>
        </div>
       </div>
      </div>
    </div>
  )
}

export default MovieCard