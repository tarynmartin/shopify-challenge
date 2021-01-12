import Search from '../Search/Search.js';
import Results from '../Results/Results.js';
import Nominations from '../Nominations/Nominations.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Shoppies</h1>
      </header>
      <Search />
      <Results />
      <Nominations />
    </div>
  );
}

export default App;
