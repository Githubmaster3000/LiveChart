import React from "react";
import { useState } from "react";

function Container() {
  const [openInput, setOpenInput] = useState(false);
  const [inputScore, setInputScore] = useState("2");
  const [inputScore2, setInputScore2] = useState("2");

  function inputFunction() {
    setOpenInput(true);
  }

  return (
    <div>
      {openInput ? (
        <form>
          <div id="container">
            <div id="player"> KHANH NGUYEN</div>
            <input id="input1" value={inputScore} />

            <div id="player2"> DJOKOVIC</div>
            <input id="input2" value={inputScore2} />
          </div>
        </form>
      ) : (
        <div id="container">
          <div id="player"> KHANH NGUYEN</div>
          <div id="score">{inputScore}</div>
          <div id="player2"> DJOKOVIC</div>
          <div id="score2">{inputScore2}</div>
          <button id="scorebtn" onClick={inputFunction}>
            Input Score
          </button>
        </div>
      )}
    </div>
  );
}

export default Container;
