import React, { useState, useEffect } from "react";

import "./ButtonContainer.css";
import { NextGuessButton } from "../NextGuessButton/NextGuessButton";
import { GuessButton } from "../GuessButton/GuessButton";

export const ButtonContainer = ({ setSource, setGuess, setResult }) => {
  return (
    <div id="button-container">
      <GuessButton
        text="Trump"
        guessValue={1}
        setGuess={setGuess}
      ></GuessButton>
      <GuessButton
        text="Kanye"
        guessValue={2}
        setGuess={setGuess}
      ></GuessButton>
      <GuessButton
        text="Ron Swanson"
        guessValue={3}
        setGuess={setGuess}
      ></GuessButton>
      <NextGuessButton
        setGuess={setGuess}
        setResult={setResult}
        setSource={setSource}
      ></NextGuessButton>
    </div>
  );
};
