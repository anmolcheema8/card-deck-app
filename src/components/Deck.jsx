import React, { useState } from "react";
import Card from "./Card";

const suits = ["♠", "♥", "♦", "♣"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const deckOfCards = [];
for (let suit of suits) {
    for (let value of values) {
        deckOfCards.push({suit, value});
    }
}

const Deck = () => {
    const [deck, setDeck] = useState(deckOfCards);
    const [drawnCards, setDrawnCards] = useState([]);

    const drawCard = () => {
        //Selecting a random index
        const randomIndex = Math.floor(Math.random() * deck.length);
        const drawnCard = deck[randomIndex];
        //Add this card to the list of drawn cards
        setDrawnCards([...drawnCards, drawnCard]);
        //Keep all cards except the drawn card i.e. removing from the deck
        setDeck(deck.filter((_, index) => index !== randomIndex));
    };

    const resetDeck = () => {
        setDeck(deckOfCards);
        setDrawnCards([]);
    };

    return (
        <div>
          <div className="deck" onClick={drawCard}>
            Draw a Card
          </div>
    
          <div className="drawn-cards">
            {drawnCards.map((card) => (
              <Card value={card.value} suit={card.suit}/>
            ))}
          </div>

          <div className="buttons">
            <button>Deal 5</button>
            <button>Deal 7</button>
            <button onClick={resetDeck}>Reset</button>
            <button>Toss</button>
            <button>Regroup</button>
            <button>Wildcard</button>
          </div>
        </div>

        
    );
};

export default Deck;