import React from 'react';
import MovieCard from '../MovieCard/MovieCard.js';
import './Results.css';

function Results({movies, nominate, hidden}) {
  let allMovies;

  if(movies) {
    allMovies = movies.map(movie => {
      return (
        <MovieCard movie={movie} nominate={nominate} hidden={hidden} parent={'results'} key={movie.imdbID}/>
      )
    })
  }

  return (
    <div className='results'>
      <h2 className='results-title'>Results:</h2>
      {movies && 
        <div className='movie-results'>
          {allMovies}
        </div>
      }
    </div>
  )
}

export default Results;