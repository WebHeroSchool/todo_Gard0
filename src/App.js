import logo from './logo.svg';
import './App.css';

const flag = true;
const flag2 = false;
const count = 22;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{ color: 'blue', fontSize: 46 - 12 }}>
          Hello Ауад Майз!
        </p>
        <p>
          {count}
        </p>
        <p>
          {flag && 'Flag is true'}
        </p>
        <p style={{ color: 'red' }}> undefined {undefined} , null  {null}, true  {true} и false {false}
        </p>
        <p>
          {flag2 ? 'Flag is true' : 'Flag is false'}
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
