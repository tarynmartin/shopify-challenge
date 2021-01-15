import React, { useState, useEffect } from 'react';
import Search from '../Search/Search.js';
import Results from '../Results/Results.js';
import Nominations from '../Nominations/Nominations.js';
import { getMovies } from '../../apiCalls.js';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [movies, setMovies] = useState(null)
  const [nominations, setNominations] = useState([])

  useEffect(() => {
    if (searchValue !== '') {
      getMovies(process.env.REACT_APP_API_KEY, searchValue, 1)
        .then(data => {
          setMovies(data.Search);
        })
    }
  }, [searchValue])

  const handleNomination = (movie) => {
    setNominations(nominations => [...nominations, movie])
  } 

  const handleValueChange = (e) => {
    if (e.nativeEvent.inputType !== 'deleteContentBackward') {
      setSearchValue(searchValue + e.nativeEvent.data)
    } else if (e.nativeEvent.inputType === 'deleteContentBackward') {
      setSearchValue(searchValue.slice(0, searchValue.length - 1))
    }
  }

    return (
      <div className="App">
        <header>
          <h1 className='header-name'>The Shoppies</h1>
        </header>
        <Search setValue={handleValueChange}/>
        <div className='results-nominations'>
          <Results movies={movies} nominate={handleNomination}/>
          <Nominations nominations={nominations}/>
        </div>
      </div>
    )
}

export default App;
