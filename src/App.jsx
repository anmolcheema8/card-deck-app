import React from "react";
import Card from "./components/Card";
import './App.css'

function App() {

  return (
    <div className="container">
      <h1>Card Deck</h1>
      <div>
        <Card value="A" suit="♠️" />
        <Card value="10" suit="♥️" />
        <Card value="K" suit="♦️" />
      </div>
    </div>
  )
}

export default App
