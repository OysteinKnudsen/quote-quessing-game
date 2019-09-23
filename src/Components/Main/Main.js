import React from "react";
import App from "../App/App";
import { HighscoreBoard } from "../HighscoreBoard/HighscoreBoard";
import { Header } from "../Header/Header";

function Main() {
  return (
    <div id="main">
      <HighscoreBoard></HighscoreBoard>
      <App></App>
    </div>
  );
}

export default Main;
