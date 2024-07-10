import { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import '../Banner/Banner.css';
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Request URL:", requests.fetchNetflixOriginals);
        const request = await axios.get(requests.fetchNetflixOriginals);
        const movies = request.data.results;
        setMovie(movies[Math.floor(Math.random() * movies.length)]);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
function truncate( str,
  n){return str?.length>n ?`${str.substring(0,n-1)}...`:str}
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <div>
         <h3> {truncate(movie?.overview, 150)}</h3> 
        </div>
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
}
export default Banner;