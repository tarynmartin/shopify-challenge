import React from 'react';
import './MovieCard.css';

function MovieCard({ movie, parent, nominate }) {

  return (
    <article className='moviecard'>
      <h2 className='movie-info'>{`${movie.Title} (${movie.Year})`}
      {parent === 'results' &&
        <button className='nominate-button' onClick={() => nominate(movie)}>Nominate</button>
      }
      {parent === 'nominations' &&
        <button className='remove-button'>Remove</button>
      }
      </h2>
    </article>
  )
}

export default MovieCard;