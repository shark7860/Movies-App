import React, {useEffect, useState}from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getMovieName} from "../../features/movies/movieSlice";

import MovieCard from '../MovieCard/MovieCard'
import './MovieListing.scss';
const MovieListing = () => {
  const [totalMovies, setTotalMovies]=useState([]);
  let movies = useSelector(getAllMovies);
  const searchText = useSelector(getMovieName);
  let mov=movies.Search;

  useEffect(()=>{
    if(Array.isArray(mov)){
      setTotalMovies([...totalMovies, ...mov]);
    }
  },[movies])
  useEffect(()=>{
    if(searchText){
      setTotalMovies([]);
    }
  },[searchText])


 
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      totalMovies.map((movie, index)=>{
          return <MovieCard key={index} data={movie}/>;
        })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  return <div className="movie-wrapper">
      <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">{renderMovies }</div>
      </div>
  </div>;
};

export default MovieListing;
