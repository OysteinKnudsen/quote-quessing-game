import React, { useState, useEffect } from "react";
import "./QuoteBox.css";

export const QuoteBox = ({ quoteSourceNumber }) => {
  const [quoteText, setQuoteText] = useState("Click on 'Start game' to play!");

  useEffect(() => {
    const getQuoteText = async () => {
      console.log("getQuoteText called");
      let quoteText = "";

      if (quoteSourceNumber === 1) {
        quoteText = await getTrumpQuote();
      }

      if (quoteSourceNumber === 2) {
        quoteText = await getKanyeQuote();
      }

      if (quoteSourceNumber === 3) {
        quoteText = await getRonSwansonQuote();
      }

      //Hacky special case to tell component to render new game.s
      if (quoteSourceNumber === -1) {
        quoteText = "Click on 'Start game' to start a new game.";
      }

      setQuoteText(quoteText);
    };

    if (quoteSourceNumber) {
      getQuoteText();
    }
  }, [quoteSourceNumber]);

  return (
    <article className="quote-box">
      <p id="quote">{quoteText}</p>
    </article>
  );
};

export default QuoteBox;

const getTrumpQuote = async () => {
  const trumpApiUrl = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
  const response = await fetch(trumpApiUrl);
  const json = await response.json();
  return json.message;
};

const getKanyeQuote = async () => {
  const kanyeApiUrl = "https://api.kanye.rest/";

  const response = await fetch(kanyeApiUrl);
  const json = await response.json();
  return json.quote;
};

const getRonSwansonQuote = async () => {
  const ronSwansonApiUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
  const response = await fetch(ronSwansonApiUrl);
  const json = await response.json();
  console.log(json);
  return json[0];
};
