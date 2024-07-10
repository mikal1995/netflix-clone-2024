import React, {useEffect ,useState}from 'react'
import "./Row.css"
import axios from '../../../utils/axios'
// import { width } from '@mui/system';
import movieTrailer from 'movie-Trailer';
import YouTube from 'react-youtube';

const Row = ({ title, fetchurl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);
  const [TrailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchurl);
        //  const request = await axios.get(`http://localhost:4000/api/${fetchurl}`);
        const request = await axios.get(fetchurl);
        console.log(request);
        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchurl]);

  const handleclick = (movie) => {
    if (TrailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          console.log(url);
          const urlparams = new URLSearchParams(new URL(url).search);
          console.log(urlparams);
          console.log(urlparams.get("v"));
          setTrailerUrl(urlparams.get("v"));
        }
      );
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playervars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
         

          <img
           classname={`row_poster${isLargeRow && "row_posterLarge"}`}
            onClick={() => handleclick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            
          />
       
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {TrailerUrl && <YouTube videoId={TrailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row
