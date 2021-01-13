import React, { Component } from 'react';
import Search from '../Search/Search.js';
import Results from '../Results/Results.js';
import Nominations from '../Nominations/Nominations.js';
import { getMovies } from '../../apiCalls.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      nominations: [],
      searchValue: null
    }
  }

  // searchForMovies = (searchValue, page) => {
  //   this.setState({ searchValue: searchValue})
  //   getMovies(process.env.REACT_APP_API_KEY, searchValue, page)
  //     .then(data => {
  //       console.log(data)
  //       this.setState({ movies: data})
  //       console.log(this.state.movies)
  //     })
  //     .catch(error => {
  //       alert('Sorry, looks like we ran into some problems. Please try again.')
  //     })
  // }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='header-name'>The Shoppies</h1>
        </header>
        <Search searchForMovies={this.searchForMovies}/>
        <div className='results-nominations'>
          <Results />
          <Nominations />
        </div>
      </div>
    )
  }
}

export default App;
