import React, { useState, useEffect } from "react";
import "./ScoreBox.css";

export const ScoreBox = ({ score }) => {
  useEffect({}, [score]);
  return (
    <div id="score-box">
      <p>
        Score: {score.correctGuesses} / {score.totalGuesses}
      </p>
    </div>
  );
};
