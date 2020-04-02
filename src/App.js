import React from 'react';
<<<<<<< HEAD
import './App.css';

function FancyDiv(props){
  return(
  <div style={{border:`1px solid ${props.bColor}`}}>{props.children}</div>
  )
}

function App(props) {
  return (
    <div className="App">
      <FancyDiv bColor={"lime"}>
        <p>I am the children content</p>
      </FancyDiv>
=======
import logo from './logo.svg';
import './App.css';

function App() {
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
>>>>>>> cacbe3b5bea3b384b02dfc652e39ab4d90173cb2
    </div>
  );
}

export default App;
