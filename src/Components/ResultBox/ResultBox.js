import React from "react";
import "./ResultBox.css";

export const ResultBox = ({ txt }) => {
  console.log("rende");
  return (
    <div id="result-box">
      <p id="result-box-text">{txt}</p>
    </div>
  );
};

export default ResultBox;
