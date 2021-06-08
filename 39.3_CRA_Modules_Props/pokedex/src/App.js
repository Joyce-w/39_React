
import './App.css';
import Pokedex from './Pokedex'
import pokemon from './pokemon'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="App-header">Pokedex</h1>
        <div id="Pokedex">
          <Pokedex key={ pokemon.id} pokemon={ pokemon }/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
