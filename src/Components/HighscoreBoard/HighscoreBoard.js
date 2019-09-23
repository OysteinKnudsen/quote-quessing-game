import React, { useEffect, useState } from "react";
import "./HighscoreBoard.css";
import { Header } from "../Header/Header";

export const HighscoreBoard = ({ header }) => {
  return (
    <div id="highscore-container">
      <Header txt="Highscore"></Header>
    </div>
  );
};
