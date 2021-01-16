import React from 'react';
import './Search.css';

function Search({setValue}) {

  return (
    <form>
      <label>Search<input type='text' placeholder='Rambo' onChange={setValue}></input></label>
    </form>
  )
}

export default Search;