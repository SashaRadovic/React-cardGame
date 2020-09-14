import React from "react";
import "./styles.css";

export default function Card(props) {
  return (
    <div className="App">
      <p className="topLeft">
        {props.name}
        {props.sign}
      </p>

      <p className="bottomRight">
        {props.name}
        {props.sign}
      </p>
    </div>
  );
}
