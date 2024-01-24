import React from "react";

function Form1({ inputScore2, setInputScore2, inputScore3, setInputScore3 }) {
  return (
    <div id="container">
      <form>
        <div id="player"> KHANH NGUYEN</div>
        <input id="input1" />
        <div id="player2"> DJOKOVIC</div>
        <input id="input2" />
      </form>
    </div>
  );
}

export default Form1;
