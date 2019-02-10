import React from "react";
import Square from "./Square";
import './Board.css';

export default class Board extends React.Component {
  renderPuzzle(level) {
    var spaceCube = this.props.cubes.find(x => x.number === "");
    let puzzle = [];
    for (let i = 0; i < level; i++) {
      let columns = [];
      for (let j = 0; j < level; j++) {
        columns.push(this.renderSquare(spaceCube, i * level + j));
      }
      puzzle.push(
        <div key={"boardRow_" + i} className="board-row">
          {columns}
        </div>
      );
    }
    // return puzzle;
    return (
        <div className="board">
          {puzzle}
        </div>
    );
  }

  renderSquare(spaceCube, i) {
    let level = this.props.level;
  
    
    return (
      <Square
        key={"square_" + i}
        cube={this.props.cubes[i]}
        cubeSize={this.props.cubeSize}
        level={level}
        spaceCube={spaceCube}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      this.renderPuzzle(this.props.level)
    );
  }
}
