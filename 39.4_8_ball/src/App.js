
import './App.css';
import answers from './Answers'
import EightBall from './EightBall';

function App() {
  return (
    <div className="App">
      <EightBall answers={answers}/>
    </div>
  );
}

export default App;
