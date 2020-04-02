import React from 'react';
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
    </div>
  );
}

export default App;
