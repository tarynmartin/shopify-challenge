import React, { useState, useEffect } from 'react';
import Search from '../Search/Search.js';
import Results from '../Results/Results.js';
import Nominations from '../Nominations/Nominations.js';
import Popup from '../Popup/Popup.js'
import { getMovies } from '../../apiCalls.js';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [movies, setMovies] = useState(null)
  const [nominations, setNominations] = useState([])
  const [hidden, setHidden] = useState(null);
  const [popup, setPopup] = useState(false)

  useEffect(() => {
    if (searchValue !== '') {
      getMovies(process.env.REACT_APP_API_KEY, searchValue, 1)
        .then(data => {
          setMovies(data.Search);
        })
    }
  }, [searchValue])

  useEffect(() => {
    if(nominations.length === 5) {
      setHidden(true)
      setPopup(true);
    } else if (nominations.length < 5) {
      setHidden(false)
      setPopup(false)
    }
  }, [nominations])

  const handleNomination = (movie) => {
    setNominations(nominations => [...nominations, movie])
  } 

  const removeNomination = (movie) => {
    setNominations(nominations.filter(nomination => nomination.imdbID !== movie.imdbID))
  }

  const handleValueChange = (e) => {
    if (e.nativeEvent.inputType !== 'deleteContentBackward') {
      setSearchValue(searchValue + e.nativeEvent.data)
    } else if (e.nativeEvent.inputType === 'deleteContentBackward') {
      setSearchValue(searchValue.slice(0, searchValue.length - 1))
    }
  }

  const closeBanner = () => {
    setPopup(false);
  }

    return (
      <div className="App">
        <header>
          <h1 className='header-name'>The Shoppies</h1>
        </header>
        {popup &&
          <Popup close={closeBanner}/>
        }
        <Search setValue={handleValueChange}/>
        <div className='results-nominations'>
          <Results movies={movies} nominate={handleNomination} hidden={hidden}/>
          <Nominations nominations={nominations} remove={removeNomination}/>
        </div>
        
      </div>
    )
}

export default App;
