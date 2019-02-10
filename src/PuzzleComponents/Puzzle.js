import React from "react";
import Board from "./Board";
import "./Puzzle.css";

class Puzzle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: Number(props.level),
      height: props.height,
      width: props.width,
      cubes: initCubes(props.level),
    };
    this.onShuffleClick = this.onShuffleClick.bind(this)
  }

  // componentDidMount(){
  //   alert(this.state.level);
  // }
  onShuffleClick() {
    let level = this.state.level;
    var complexity = level * level * level * level;
    var cubes = initCubes(level);
    var randomNos = [];
    for (var i = 0; i < complexity; i++) {
      var randomI = Math.floor(Math.random() * (level * level) + 0);
      if (randomI === randomNos[randomNos.length - 1]) continue;
      randomNos.push(randomI);
      swapCubes(cubes, this.state.level, randomI + 1);
    }
    if (checkIfWon(cubes)) {
      this.onShuffleClick();
    }
    this.setState(
      {
        cubes: cubes
      }
    );
  }

  handleClick(i) {
    if (this.state.cubes[i].number === "") return;
    const cubes = this.state.cubes;
    moveCube(cubes, this.state.level, i);
    if(checkIfWon(cubes))
    {
      alert("You win!");
    }
  }

  render() {
    const cubes = this.state.cubes;
    const level = this.state.level;
    const cubeSize =
      (this.state.height / 2 < this.state.width
        ? this.state.height / 2
        : this.state.width) /
      (level + 1);
    return (
        <div className="puzzle">
          <Board
            cubes={cubes}
            level={level}
            cubeSize={cubeSize}
            onClick={i => this.handleClick(i)}
          />
          <button className="newGame" onClick={this.onShuffleClick}>new game</button>
        </div>
        
        
    );
  }
}

export default Puzzle;

function moveCube(cubes, level, i) {
  var spaceCubePos = cubes.find(x => x.number === "").position;
  // vertical move
  if (spaceCubePos % level === (i + 1) % level) {
    //move up
    if (i + 1 > spaceCubePos) {
      for (var j = spaceCubePos + level; j <= i + 1; j = j + level) {
        swapCubes(cubes, level, j);
      }
    } else {
      for (var k = spaceCubePos - level; k >= i + 1; k = k - level) {
        swapCubes(cubes, level, k);
      }
    }
  }
  //horizontal move
  var tmpCubes = cubes.slice();
  while (tmpCubes.length) {
    var row = tmpCubes.splice(0, level);
    // console.log(row);
    if (
      row.find(x => x.position === spaceCubePos) &&
      row.find(x => x.position === i + 1)
    ) {
      //move right
      if (i + 1 < spaceCubePos) {
        for (j = spaceCubePos - 1; j >= i + 1; j--) {
          swapCubes(cubes, level, j);
        }
      } else {
        for (k = spaceCubePos + 1; k <= i + 1; k++) {
          swapCubes(cubes, level, k);
        }
      }
    }
  }
}

function checkIfWon(cubes) {
  var anyCubesLeft = cubes.find(
    x => x.position !== x.number && x.number !== ""
  );
  return !anyCubesLeft ? true : false;
}

function initCubes(level) {
  var cubes = [];
  for (let i = 0; i < level * level; i++) {
    cubes.push({
      position: i + 1,
      number: i === level * level - 1 ? "" : i + 1
    });
  }
  return cubes;
}

function swapCubes(cubes, level, cubePos) {
  var spaceCube = cubes.find(x => x.number === "");
  if (
    spaceCube.position - level === cubePos ||
    (spaceCube.position - 1 === cubePos && spaceCube.position % level !== 1) ||
    (spaceCube.position + 1 === cubePos && spaceCube.position % level !== 0) ||
    spaceCube.position + level === cubePos
  ) {
    var tmpPlayerNo = cubes[cubePos - 1].number;
    cubes[cubePos - 1].number = spaceCube.number;
    cubes[spaceCube.position - 1].number = tmpPlayerNo;
  }
}


