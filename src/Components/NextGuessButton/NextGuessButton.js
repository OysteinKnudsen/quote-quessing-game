import React from "react";
import "./NextGuessButton.css";

export const NextGuessButton = ({ setSource, setResult, setGuess }) => {
  const onClick = () => {
    const number = getRandomInt(1, 3);
    setGuess(null);
    setResult(null);
    setSource(number);
  };

  return (
    <button id="next-guess-button" onClick={onClick}>
      Next guess
    </button>
  );
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
