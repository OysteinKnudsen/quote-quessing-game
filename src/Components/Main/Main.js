import React from "react";
import App from "../App/App";
import { HighscoreBoard } from "../HighscoreBoard/HighscoreBoard";

function Main() {
  return (
    <div id="main">
      <HighscoreBoard></HighscoreBoard>
      <App></App>
    </div>
  );
}

export default Main;
