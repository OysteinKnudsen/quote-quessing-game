import React from "react";
import "./Header.css";

export const Header = ({ txt }) => {
  return (
    <div className="header">
      <h1 id="header-text">{txt}</h1>
    </div>
  );
};

export default Header;
