import React from 'react';
import './Search.css';

function Search() {
  return (
    <form>
      <label>Search:</label>
      <input type='text' value='' placeholder='Rambo'></input>
      <button>Submit</button>
    </form>
  )
}

export default Search;