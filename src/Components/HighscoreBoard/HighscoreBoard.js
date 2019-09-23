import React, { useEffect, useState } from "react";
import "./HighscoreBoard.css";
import { Header } from "../Header/Header";

export const HighscoreBoard = () => {
  return (
    <div id="highscore-container">
      <Header txt="Highscore"></Header>
      <ol>
        <li></li>
      </ol>
    </div>
  );
};
