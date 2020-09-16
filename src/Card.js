import React from "react";
import "./styles.css";


export default function Card(props) {





  
  const source =`url('${props.src}')`
  const imgSrc={
    backgroundImage:  source,
  }
  console.log(typeof(props.src))
  return (
    <div className="App"  style={imgSrc}>
      
 </div>
  );
}
