import React from 'react';
import './Nominations.css'
import MovieCard from '../MovieCard/MovieCard';

function Nominations({nominations, remove}) {
  let nominatedMovies;
  
  if(nominations) {
    nominatedMovies = nominations.map(movie => {
      return (
        <MovieCard movie={movie} remove={remove} parent={'nominations'} key={movie.imdbID} />
      )
    })
  }

  return (
    <div className='nominations'>
      <div className='title-container'>
        <h2 className='nominations-title'>Your Nominations</h2>
      </div>
      {nominations.length === 0 &&
        <h3 className='no-nominations'>No nominations yet. Please click on the nominate button for up to 5 movies you would like to nominate.</h3>
      }
      {nominations &&
        <div className='all-nominations'>
          {nominatedMovies}
        </div>
      }
    </div>
  )
}

export default Nominations;