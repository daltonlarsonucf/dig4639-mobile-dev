import React from 'react';
import logo from './logo.svg';
import './App.css';

function NameBadge(props) {
  console.log(props);
<<<<<<< HEAD
  return <p>My name is {props.name}</p>
}

class App extends React.Component {
  clickHandler = () => {
    alert("Clicked +" + this);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div onClick = {this.clickHandler}>
          <img src={logo} className="App-logo" alt="logo" />
          </div>
          <p>
            Hello World!
          </p>
          <NameBadge name = "Dalton"/>
          <NameBadge name = "ur mom"/>
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
=======
  return ( 
    <p>My name is {props.name}</p>
  )
}

class App extends React.Component {
  clickHandler(e) {
    alert("Clicked +");
    console.log(this);
    console.log(e);
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div  onClick={this.clickHandler}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Hello World 
        </p>
        <NameBadge name="John"/>
        <NameBadge name="Ana"/>
        <NameBadge name="June"/>
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
>>>>>>> fe277fcee38e1b953a813f52fa2d0a9fceacf0f6
}

export default App;
