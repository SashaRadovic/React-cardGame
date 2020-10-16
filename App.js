import React from "react";
import "./styles.css";
import Card from "./src/Card";

let yourScore = 0;
let compScore = 0;
let numberBoxHoldCopy = []
let cardsPics=[
'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Playing_card_club_A.svg/800px-Playing_card_club_A.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Playing_card_club_2.svg/800px-Playing_card_club_2.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Playing_card_club_3.svg/800px-Playing_card_club_3.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Playing_card_club_4.svg/800px-Playing_card_club_4.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_club_5.svg/800px-Playing_card_club_5.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Playing_card_club_6.svg/800px-Playing_card_club_6.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Playing_card_club_7.svg/800px-Playing_card_club_7.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Playing_card_club_8.svg/800px-Playing_card_club_8.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Playing_card_club_9.svg/800px-Playing_card_club_9.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Playing_card_club_10.svg/800px-Playing_card_club_10.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Playing_card_club_J.svg/800px-Playing_card_club_J.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_club_Q.svg/800px-Playing_card_club_Q.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Playing_card_club_K.svg/800px-Playing_card_club_K.svg.png',
];
let youWin = <p id="youwin"></p>;
let compWin = <p id="compwin"></p>;
const newGame = () => {
 // document.querySelector("#compwin").innerHTML = "";
// document.querySelector("#youwin").innerHTML = "";
  document.location.reload();
};
export default function Element() {
  const numberOnCard = Math.floor(Math.random() * 13 + 1);
  const [numberBox, setNumberBox] = React.useState([]);
  const [numberBoxHold, setNumberBoxHold] = React.useState([]);

  const handleCreateDiv = () => {
    yourScore += numberOnCard;
    setNumberBox(
      numberBox.concat(<Card name={numberOnCard} key={numberBox.length} src={cardsPics[numberOnCard-1]} />)
    );
    if (yourScore > 21) {
      compWin = <p id="compwin">Comp wins!</p>;
    }
  };
  const handleCreateDivHold = () => {
    const numberOnCard = Math.floor(Math.random() * 13 + 1);
    compScore += numberOnCard;

   
    numberBoxHoldCopy.push(
      <Card name={numberOnCard} key={Math.floor(Math.random() * 1000)} src={cardsPics[numberOnCard-1]}/>
    );
    setNumberBoxHold(numberBoxHoldCopy);
  };

  if (compScore < yourScore && compScore < 22 && compScore > 0) {
    handleCreateDivHold()
    //document.querySelector("#comp").click();
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
      <div>
        <div id="youwinDiv">
          {numberBox}
          Your Score: {yourScore}
        </div>
        <div >{youWin}</div>
      </div>
      <div id="compwinDiv">
        <div>
          {numberBoxHold}
          Comp Score: {compScore}
        </div>
        <div >{compWin}</div>
      </div>
    </div>
  );
}
