import React from "react";
import Card from "./components/Card";
import './App.css'

function App() {
  const suits = ["♠", "♥", "♦", "♣"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const cards = [];
  for (let suit of suits) {
    for (let value of values) {
      cards.push(
        <Card value={value} suit={suit} />
      );
    }
  }

  return (
    <div className="container">
      <h1>Card Deck</h1>
      <div className="deck">
        {cards}
      </div>
    </div>
  )
}

export default App
