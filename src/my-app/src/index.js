import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function sum(a, b) {
  return a + b
}

function primeiroJSX() {
  return (
    <div className="teste">
      Erick de Faria Inácio
      <h1>Soma: {sum(15, 60)}</h1>
    </div>
  )
}

const App = () => {

  return (
    <div className="App">
      {primeiroJSX()}
   </div>
  ) 
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);