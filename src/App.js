import logo from './HOS.jpg';
import './App.css';
import Component1 from './component/Component1.js';
import Component2 from './component/Component2.js';
import Component3 from './component/Component3.js';
import Hello from './component/Hello.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the React App!
        </p>
        <Hello />
        <div className="components-container">
          <div className="component-box">
            <Component1 />
          </div>
          <div className="component-box">
            <Component2 />
          </div>
          <div className="component-box">
            <Component3 />
          </div>
        </div>
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
