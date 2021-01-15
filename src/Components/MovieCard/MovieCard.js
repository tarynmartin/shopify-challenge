import React from 'react';
import './MovieCard.css';

function MovieCard({ movie, parent }) {

  return (
    <article className='moviecard'>
      <h2 className='movie-info'>{`${movie.Title} (${movie.Year})`}<button className='nominate-button'>Nominate</button></h2>
    </article>
  )
}

export default MovieCard;