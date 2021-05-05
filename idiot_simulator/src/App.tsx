// Import
import React from 'react';
import './App.css';
import logo from './logo.png';
import ReactDOM from 'react-dom';

// Acess click thing
function startSimulation() {
  const element = <p>Simulating...</p>;
  ReactDOM.render(element, document.getElementById('runButton'));
}

// Main Class
class Main {
  // Display
  App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Idiot Simulator</h1>
          <img src={logo} className="App-Logo" alt="epic logo"></img>
          <br></br>
          <br></br>
          <input id="upload" type="file" accept=".idiot" name="files[]" size={30}></input>
          <br></br>
          <button className="runButton" onClick={startSimulation} id="runButton">Simulate an Idiot</button>
        </header>
      </div>
    );
  }
}

// Export App
const main: Main = new Main();
export default main.App;
