import React from 'react'
import Row from '../Row/Row';
import requests from '../../../utils/requests' 

function RowList() {
  return (
    <>
      <Row
  title="NETFLIX ORGINALS" 
  fetchurl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchurl={requests.fetchTrending} />
      <Row title="Top Rated" fetchurl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
      <Row title="HorrorMovies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies} />
      <Row title="Tv shows" fetchurl={requests.fetchPopularTvShows} />
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaryMovies} />
    </>
  );
}

export default RowList
