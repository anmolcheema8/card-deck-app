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
    const [pickedCard, setPickedCard] = useState(null);

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
        setPickedCard(null);
    };

    const dealFiveCards = () => {
        let newDeck = [...deck];
        let newDrawnCards = [];

        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * newDeck.length);
            const drawnCard = deck[randomIndex];
            newDrawnCards.push(drawnCard);
            newDeck = newDeck.filter((_, index) => index !== randomIndex);
        }

        setDeck(newDeck);
        setDrawnCards(newDrawnCards);
        setPickedCard(null);
    }

    const dealSevenCards = () => {
        let newDeck = [...deck];
        let newDrawnCards = [];

        for (let i = 0; i < 7; i++) {
            const randomIndex = Math.floor(Math.random() * newDeck.length);
            const drawnCard = deck[randomIndex];
            newDrawnCards.push(drawnCard);
            newDeck = newDeck.filter((_, index) => index !== randomIndex);
        }

        setDeck(newDeck);
        setDrawnCards(newDrawnCards);
        setPickedCard(null);
    }

    const handleCardSelect = (index) => {
        if (pickedCard === null) { //if no card is already selected, select this one
          setPickedCard(index);
        } else {
          let newCards = [...drawnCards];
          //swap the previously selected card with the new one
          let temp = newCards[pickedCard];
          newCards[pickedCard] = newCards[index];
          newCards[index] = temp;
          setDrawnCards(newCards);
        }
    };

    return (
        <div>
          <div className="deck" onClick={drawCard}>
            Draw a Card
          </div>
    
          <div className="drawn-cards">
            {drawnCards.map((card, index) => (
              <Card key={index} //unique identifier for list items
                    value={card.value}
                    suit={card.suit} 
                    isPicked={pickedCard === index}
                    onClick={() => handleCardSelect(index)}/>
            ))}
          </div>

          <div className="buttons">
            <button onClick={dealFiveCards}>Deal 5</button>
            <button onClick={dealSevenCards}>Deal 7</button>
            <button onClick={resetDeck}>Reset</button>
            <button>Toss</button>
            <button>Regroup</button>
            <button>Wildcard</button>
          </div>
        </div>
    );
};

export default Deck;