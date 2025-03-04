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