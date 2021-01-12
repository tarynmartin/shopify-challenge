import Search from '../Search/Search.js';
import Results from '../Results/Results.js';
import Nominations from '../Nominations/Nominations.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className='header-name'>The Shoppies</h1>
      </header>
      <Search />
      <div className='results-nominations'>
        <Results />
        <Nominations />
      </div>
    </div>
  );
}

export default App;
