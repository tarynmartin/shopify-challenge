import React, { useState, useEffect } from 'react';
import { getMovies } from '../../apiCalls.js';
import './Search.css';

function Search(props) {
  const [searchValue, setSearchValue ] = useState('')

  useEffect(() => {
    getMovies(process.env.REACT_APP_API_KEY, searchValue, 1)
      .then(data => {
        console.log('data ', data)
      })
  }, [searchValue])

  return (
    <form>
      <label>Search:</label>
      <input type='text' value={searchValue}placeholder='Rambo' onChange={(e) => setSearchValue(e.target.value)}></input>
    </form>
  )
}

export default Search;