import React, { useState, useEffect } from "react";
import "./App.css";
import { QuoteBox } from "../QuoteBox/QuoteBox";
import { Header } from "../Header/Header";
import { ButtonContainer } from "../GuessButtonContainer/ButtonContainer";
import { ResultBox } from "../ResultBox/ResultBox";
import ScoreBox from "../ScoreBox/ScoreBox";

function App() {
  //The correct source of the quote.
  const [quoteSourceNumber, setSource] = useState(null);
  //The guessed source of the quote.
  const [guessedSourceNumber, setGuess] = useState(null);
  //The result text after the guess.
  const [result, setResult] = useState("");
  //The score
  const [score, setScore] = useState({ correctGuesses: 0, totalGuesses: 0 });
  console.log(score);

  //Handle guessing.
  useEffect(() => {
    if (guessedSourceNumber && quoteSourceNumber) {
      //Case of Incorrect guess
      if (guessedSourceNumber !== quoteSourceNumber && result === "") {
        setScore({
          correctGuesses: score.correctGuesses,
          totalGuesses: score.totalGuesses + 1
        });

        setResult("Nope!");

        //Case of correct guess
      } else if (guessedSourceNumber === quoteSourceNumber && result === "") {
        console.log("Correct");
        setScore({
          correctGuesses: score.correctGuesses + 1,
          totalGuesses: score.totalGuesses + 1
        });
        setResult("Good guessing!");
      }
    } else {
      setResult("");
    }
  }, [
    guessedSourceNumber,
    quoteSourceNumber,
    result,
    score.correctGuesses,
    score.totalGuesses
  ]);

  document.title = "Quote guessing game!";
  return (
    <div id="app-container">
      <Header />
      <QuoteBox quoteSourceNumber={quoteSourceNumber} />
      <ButtonContainer
        setResult={setResult}
        setSource={setSource}
        setGuess={setGuess}
      ></ButtonContainer>
      <ResultBox txt={result}></ResultBox>
      <ScoreBox score={score}></ScoreBox>
    </div>
  );
}

export default App;
