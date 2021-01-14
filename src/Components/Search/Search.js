import React from 'react';
import './Search.css';

function Search({setValue}) {

  return (
    <form>
      <label>Search:</label>
      <input type='text' placeholder='Rambo' onChange={setValue}></input>
    </form>
  )
}

export default Search;