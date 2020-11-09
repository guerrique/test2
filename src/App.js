import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    userInput: ''
  }


  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value});
    // console.log(this.state.userInput)
  }

  deleteLetterHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {

    const letters = this.state.userInput.split('').map((letter, index) => {
      return <CharComponent
        letter = {letter}
        key = {index}
        clicked = {() => this.deleteLetterHandler(index)}/>
    });

    return (
      <div className = "App">
          <h1> Test Numero Dos</h1>
          <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput}/>
          <p>{this.state.userInput}</p>
          <ValidationComponent
            length = {this.state.userInput.length}/>
          {letters}
      </div>
      );
  }
}

export default App;
