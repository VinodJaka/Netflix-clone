
import React, {useState,useEffect} from 'react';
import axios from './axios';
import './Row.css'
import  YouTube  from 'react-youtube';
import movieTrailer  from 'movie-trailer';

const base_url="https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {

      
const [movies, setMovies]= useState([]);
const [trailerUrl, setTrailer]=useState("");

useEffect(()=>{

    async function fetchData(){
        const request =await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }
    fetchData();
},[fetchUrl]);

const opts = {
  /*u will find this code snippet in react youtube docs on google */
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
const handleClick=(movie)=>{
  if(trailerUrl){
    setTrailer('');
  }else{
    movieTrailer(movie?.name|| "")
    .then((url)=>{
      const urlParams =new URLSearchParams(new URL(url).search);
      let b= urlParams.get("v")
      console.log(b);
      setTrailer(urlParams.get("v"));
    })
    .catch((error)=>console.log(error));
  }
};

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie =>(
            <img key={movie.id} onClick={()=>handleClick(movie) }className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
          src={`${base_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`} 
        alt={movie.name}/>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row
