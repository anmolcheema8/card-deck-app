/*
StAuth10244: I Anmoldeep Singh, 000913075 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else. -->
*/
import React from "react";

const Card = ({ value, suit, isPicked, onClick }) => {
  return (
    <div 
      className = {`card ${isPicked ? "picked" : ""} ${suit === '♥' || suit === '♦' ? "red-suit" : "black-suit"}`}
      onClick={onClick}
    >
      <p>{value} {suit}</p> 
    </div>
  );
};

export default Card;