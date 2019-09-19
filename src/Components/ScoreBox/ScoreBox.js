import React from "react";
import "./ScoreBox.css";

const ScoreBox = ({ score }) => {
  return (
    <div id="score-box">
      <p>
        Score: {score.correctGuesses} / {score.totalGuesses}
      </p>
    </div>
  );
};
export default ScoreBox;
