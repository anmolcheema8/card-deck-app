import React from "react";

const Card = ({ value, suit }) => {
  return (
    <div>
      <h2>{value}</h2>
      <p>{suit}</p>
    </div>
  );
};

export default Card;