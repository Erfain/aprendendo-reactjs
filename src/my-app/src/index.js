import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button.jsx'
import './styles.css'

function soma(a, b) {
  alert(a + b)
}

function App () {
  return (
    <div className="App">
      Hello World
      <Button onclick={() => soma(10, 20)} name="Erick F. Inácio" />
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);