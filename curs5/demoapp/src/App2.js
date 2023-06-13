import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


class App2 extends Component {

  constructor(props) {
    super(props);
    console.log('Sunt in constructor');
  }
  componentDidMount() {
    console.log('Sunt in componentDidMount');
  }
  
  render() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App2.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Welcome name="Megulete" prename="Alexandru" />
        </header>
      </div>
    );
  }

}
 function Welcome(props) {
    return <h1>Bine ai venit la React, {props.name} {props.prename} !</h1>
  }

export default App2;