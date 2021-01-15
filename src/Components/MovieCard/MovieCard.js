import React from 'react';
import './MovieCard.css';

function MovieCard({ movie, parent, nominate, remove }) {

  const nominateOnClick = (movie) => {
    movie.disabled = true;
    nominate(movie);
  }

  const removeNomination = (movie) => {
    movie.disabled = false;
    remove(movie)
  }

  return (
    <article className='moviecard'>
      <h2 className='movie-info'>{`${movie.Title} (${movie.Year})`}
      {parent === 'results' &&
          <button className={`nominate-button ${hidden ? 'hidden' : ''}`} disabled={movie.disabled} onClick={() => nominateOnClick(movie)}>Nominate</button>
      }
      {parent === 'nominations' &&
        <button className='remove-button' onClick={() => removeNomination(movie)}>Remove</button>
      }
      </h2>
    </article>
  )
}

export default MovieCard;