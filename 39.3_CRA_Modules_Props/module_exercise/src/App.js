import logo from './logo.svg';
import './App.css';
import foods from './foods';
import { choice, remove } from './helpers'
function App() {
  let randFruit = choice(foods)
  console.log(`I'd like one ${randFruit} please`)
  console.log(`Here you go: ${randFruit} `)
  console.log(`Delicious, may I have another?`)
  let newArray = remove(foods, randFruit)
  console.log(`We're all out. We have ${newArray.length} left`)
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
