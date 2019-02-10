import React, { Component } from 'react';
import './App.css';
import Puzzle from "./PuzzleComponents/Puzzle.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Puzzle
          level="4"
          height={window.innerHeight}
          width={window.innerWidth}
          moves="0"
          targetMoves="0"
        />
      </div>
    );
  }
}

export default App;
