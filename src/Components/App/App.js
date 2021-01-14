import React, { useState, useEffect } from 'react';
import Search from '../Search/Search.js';
import Results from '../Results/Results.js';
import Nominations from '../Nominations/Nominations.js';
import { getMovies } from '../../apiCalls.js';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('')
  let movies;

  useEffect(() => {
    console.log('search ', searchValue);
    if (searchValue !== '') {
      getMovies(process.env.REACT_APP_API_KEY, searchValue, 1)
        .then(data => {
          console.log('data ', data.Search)
          movies = data.Search
          console.log('Movies ', movies);
        })
    }
  }, [searchValue])

  const handleValueChange = (e) => {
    setSearchValue(searchValue + e.nativeEvent.data)
  }

    return (
      <div className="App">
        <header>
          <h1 className='header-name'>The Shoppies</h1>
        </header>
        <Search setValue={handleValueChange}/>
        <div className='results-nominations'>
          <Results />
          <Nominations />
        </div>
      </div>
    )
}

export default App;
