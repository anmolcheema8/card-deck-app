import React from "react";

const Card = ({ value, suit }) => {
  return (
    <div className = "card">
      <p>{value}</p>
      <p>{suit}</p>
    </div>
  );
};

export default Card;