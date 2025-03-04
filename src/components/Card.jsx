import React from "react";

const Card = ({ value, suit, isPicked, onClick }) => {
  return (
    <div 
      className = {`card ${isPicked ? "picked" : ""}`}
      onClick={onClick}
    >
      <p>{value}</p>
      <p>{suit}</p>
    </div>
  );
};

export default Card;