import React, { useState, useEffect } from "react";
import "./App.css";
import { QuoteBox } from "../QuoteBox/QuoteBox";
import { Header } from "../Header/Header";
import { ButtonContainer } from "../GuessButtonContainer/ButtonContainer";
import { ResultBox } from "../ResultBox/ResultBox";
import ScoreBox from "../ScoreBox/ScoreBox";

function App() {
  let myDict = {
    1: "Trump",
    2: "Kanye",
    3: "Ron Swanson"
  };

  const maxAttempts = 10;

  //The correct source of the quote.
  const [quoteSourceNumber, setSource] = useState(null);
  //The guessed source of the quote.
  const [guessedSourceNumber, setGuess] = useState(null);
  //The result text after the guess.
  const [result, setResult] = useState("");
  //The score
  const [score, setScore] = useState({ correctGuesses: 0, totalGuesses: 0 });

  //Main game logic here. Handle guessing.
  useEffect(() => {
    // Game has ended
    if (score.totalGuesses >= maxAttempts) {
      // End the game, add highscore list

      //TODO: Logic for this

      //Set the result based on how good the player did.
      const corrGuesses = score.correctGuesses;
      switch (true) {
        case corrGuesses > 8:
          setResult("Wow, impressive!");
          break;
        case corrGuesses > 5:
          setResult("Good game!");
          break;
        case corrGuesses < 5:
          setResult("Better luck next time");
          break;

        case corrGuesses < 3:
          setResult("You need some practice.");
          break;
        default:
          break;
      }
      return;
    }
    if (guessedSourceNumber && quoteSourceNumber) {
      //Case of Incorrect guess
      if (guessedSourceNumber !== quoteSourceNumber && result === "") {
        setScore({
          correctGuesses: score.correctGuesses,
          totalGuesses: score.totalGuesses + 1
        });

        setResult(`Nope. That was ${myDict[quoteSourceNumber]}!`);

        //Case of correct guess
      } else if (guessedSourceNumber === quoteSourceNumber && result === "") {
        setScore({
          correctGuesses: score.correctGuesses + 1,
          totalGuesses: score.totalGuesses + 1
        });

        setResult(`Good guessing!`);
      }
    } else {
      setResult("");
    }
  }, [
    guessedSourceNumber,
    quoteSourceNumber,
    result,
    score.correctGuesses,
    score.totalGuesses,
    myDict
  ]);

  document.title = "Quote guessing game!";

  return (
    <div id="app-container">
      <Header txt="Quote Guessing Game" />
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
