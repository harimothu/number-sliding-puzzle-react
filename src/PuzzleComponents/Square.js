import React from "react";

function Square(props) {
  return (
      <button className="sqaure" onClick={props.onClick}
      style={{
          display: "flex",
          fontSize: props.cubeSize / 3,
          fontWeight: "bold",
          width: props.cubeSize,
          height: props.cubeSize,
          margin: props.cubeSize / 20,
          borderRadius: 4,
          backgroundColor:
            props.cube.number === ""
              ? "#B9ADA0"
              : props.cube.number === props.cube.position
                ? "#9dc9cc"
                : "#e2d1ae",
          alignItems: "center",
          justifyContent: "center"

        }}
      >
          {props.cube.number.toString()}
      </button>
  );
}

export default Square;
