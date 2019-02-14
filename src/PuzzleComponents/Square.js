import React from "react";

function Square(props) {
  return (
        <button onClick={props.onClick}
        className="col-sm-3"
        style={{
            fontSize: props.cubeSize / 3,
            fontWeight: "bold",
            height: "100%",
            width: "100%",
            borderRadius: 4,
            backgroundColor:
              props.cube.number === props.level * props.level
                ? "#faf8ef"
                : props.cube.number === props.cube.position
                  ? "#9dc9cc"
                  : "#e2d1ae",
            color:
              props.cube.number === props.level * props.level
                ? "#faf8ef"
                : "black",
          }}
        >
            {props.cube.number.toString() === "" ? "        " : props.cube.number.toString()}
        </button>
  );
}

export default Square;
