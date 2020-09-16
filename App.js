import React from "react";
import "./src/styles.css";
import Card from "./src/Card";

let yourScore = 0;
let compScore = 0;
let numberBoxHoldCopy = [];
let youWin = <p id="youwin"></p>;
let compWin = <p id="compwin"></p>;
const newGame = () => {
  document.querySelector("#compwin").innerHTML = "";
  document.querySelector("#youwin").innerHTML = "";
  document.location.reload();
};
export default function Element() {
  const signs = ["\u2664", "\u2661", "\u2662", "\u2667"];
  const numberOnCard = Math.floor(Math.random() * 13 + 1);
  const signOnCardIndex = Math.floor(Math.random() * 3 + 1);
  const [numberBox, setNumberBox] = React.useState([]);
  const [numberBoxHold, setNumberBoxHold] = React.useState([]);
 const cardsSources= [['1k.png', '1t.png'], ['12k.png', '2t.png'], ['3k.png', '3t.png'], ['4k.png', '4t.png'], ['5k.png', '5t.png'], ['6k.png', '6t.png'], ['7k.png', '7t.png'], ['8k.png', '8t.png'], ['9k.png', '9t.png'], ['10k.png', '10t.png'], ['11k.png', '11t.png'], ['12k.png', '12t.png'], ['13k.png', '13t.png'], ['14.png', '14.png']]
  const handleCreateDiv = () => {
    yourScore += numberOnCard;
    const numberOnCardIndex =Math.floor(Math.random() * 1)
    console.log(numberOnCardIndex)
    setNumberBox(
      numberBox.concat(
        <Card
          name={numberOnCard}
          sign={signs[signOnCardIndex]}
         src={cardsSources[numberOnCard-1][numberOnCardIndex]}
          key={numberBox.length}
        />
      )
    );
    if (yourScore > 21) {
      compWin = <p id="compwin">Comp wins!</p>;
    }
  };
  const handleCreateDivHold = () => {
    const numberOnCard = Math.floor(Math.random() * 13 + 1);
    const numberOnCardIndex =Math.round(Math.random() )
    console.log(numberOnCardIndex)
    compScore += numberOnCard;

    //setNumberBoxHold(numberBoxHold => [...numberBoxHold, <Card name={numberOnCard} key={Math.floor(Math.random()*1000)} />])
    numberBoxHoldCopy.push(
      <Card
        name={numberOnCard}
        sign={signs[signOnCardIndex]}
        src={cardsSources[numberOnCard-1][numberOnCardIndex]}
        key={Math.floor(Math.random() * 1000)}
      />
    );
    setNumberBoxHold(numberBoxHoldCopy);
  };

  if (compScore < yourScore && compScore < 22 && compScore > 0) {
    document.querySelector("#comp").click();
  } else if (compScore >= yourScore && compScore < 22 && compScore > 0) {
    compWin = <p id="compwin">Comp wins!</p>;
  } else if (compScore > 21) {
    youWin = <p id="youwin">You Win!</p>;
  }

  //React.useEffect( ()=> {console.log(numberBoxHold)})

  // document.querySelector('#comp').click()

  return (
    <div className="wrap">
      <div>
        <button onClick={handleCreateDiv}>Hit Next</button>
        <button id="comp" onClick={handleCreateDivHold}>
          Hold
        </button>
        <button onClick={newGame}>New Game</button>
      </div>
      <div id='playerScore'>
        <div>
          {numberBox}
          Your Score: {yourScore}
        </div>
        <div id="youwinDiv">{youWin}</div>
      </div>
      <div id='compScore'>
        <div>
          {numberBoxHold}
          Comp Score: {compScore}
        </div>
        <div id="compwinDiv">{compWin}</div>
      </div>
    </div>
  );
}
