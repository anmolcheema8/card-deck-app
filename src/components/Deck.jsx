/*
StAuth10244: I Anmoldeep Singh, 000913075 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else. -->
*/
import React, { useState } from "react";
import Card from "./Card";

const suits = ["♠", "♥", "♦", "♣"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const deckOfCards = [];
for (let suit of suits) {
    for (let value of values) {
        deckOfCards.push({ suit, value });
    }
}

const Deck = () => {
    const [deck, setDeck] = useState(deckOfCards);
    const [drawnCards, setDrawnCards] = useState([]);
    const [pickedCard, setPickedCard] = useState(null);
    const [showAllDeckCards, setShowAllDeckCards] = useState(false);

    const drawCard = () => {
        if (deck.length === 0) return;

        //Selecting a random index
        const randomIndex = Math.floor(Math.random() * deck.length);
        const drawnCard = deck[randomIndex];
        //Add this card to the list of drawn cards
        setDrawnCards([...drawnCards, drawnCard]);
        //Keep all cards except the drawn card i.e. removing from the deck
        setDeck(deck.filter((_, index) => index !== randomIndex));
    };

    const resetDeck = () => {
        setDeck([...deck, ...drawnCards]); //all cards in the list are added back to the deck
        setDrawnCards([]);
        setPickedCard(null);
    };

    const dealFiveCards = () => {
        let newDeck = [...deck, ...drawnCards]; //Add drawn cards back to the deck
        let newDrawnCards = [];

        const cardsToDraw = Math.min(5, newDeck.length);

        for (let i = 0; i < cardsToDraw; i++) {
            const randomIndex = Math.floor(Math.random() * newDeck.length);
            const drawnCard = newDeck[randomIndex];
            newDrawnCards.push(drawnCard);
            newDeck = newDeck.filter((_, index) => index !== randomIndex);
        }

        setDeck(newDeck);
        setDrawnCards(newDrawnCards);
        setPickedCard(null);
    }

    const dealSevenCards = () => {
        let newDeck = [...deck, ...drawnCards]; //Add drawn cards back to the deck
        let newDrawnCards = [];

        const cardsToDraw = Math.min(7, newDeck.length);

        for (let i = 0; i < cardsToDraw; i++) {
            const randomIndex = Math.floor(Math.random() * newDeck.length);
            const drawnCard = newDeck[randomIndex];
            newDrawnCards.push(drawnCard);
            newDeck = newDeck.filter((_, index) => index !== randomIndex);
        }

        setDeck(newDeck);
        setDrawnCards(newDrawnCards);
        setPickedCard(null);
    }

    const tossCard = () => {
        if (pickedCard === null)
            return;

        //remove the picked card from drawnCards, also not adding it back to the deck
        //permanent deletion of the card
        const newDrawnCards = drawnCards.filter((_, index) => index !== pickedCard);

        setDrawnCards(newDrawnCards);
        setPickedCard(null);
    }

    const regroupCards = () => {
        let rearrangedCards = [...drawnCards];

        for (let i = rearrangedCards.length - 1; i >= 0; i--) {
            //pick a random card between 0 to i to swap with the current card at index i
            const j = Math.floor(Math.random() * (i + 1));

            //swap the cards at index i and j
            let temp = rearrangedCards[i];
            rearrangedCards[i] = rearrangedCards[j];
            rearrangedCards[j] = temp;
        }

        setDrawnCards(rearrangedCards);
    }

    const addWildcard = () => {
        // Generate a random suit and value
        const wildcardSuit = suits[Math.floor(Math.random() * suits.length)];
        const wildcardValue = values[Math.floor(Math.random() * values.length)];

        const newCard = { suit: wildcardSuit, value: wildcardValue };

        // Add the new card to the drawnCards list
        setDrawnCards([...drawnCards, newCard]);
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
            //reset the state after swapping
            //also handles the case when the same card is selected i.e. remove highlight from the picked card
            setPickedCard(null);
        }
    };

    const toggleDeckDisplay = () => {
        setShowAllDeckCards(!showAllDeckCards);
    };

    return (
        <div>
            <div className="deck" onClick={drawCard}>
                {deck.length > 0 ? "Draw a Card" : "No Cards Remaining"}
            </div>

            {/* Display All Remaining Cards in Deck */}
            <div className="drawn-cards">
                {drawnCards.map((card, index) => (
                    <Card key={index} //unique identifier for list items
                        value={card.value}
                        suit={card.suit}
                        isPicked={pickedCard === index}
                        onClick={() => handleCardSelect(index)} />
                ))}
            </div>

            <div className="buttons">
                <button onClick={dealFiveCards}>Deal 5</button>
                <button onClick={dealSevenCards}>Deal 7</button>
                <button onClick={tossCard}>Toss</button>
                <button onClick={regroupCards}>Regroup</button>
                <button onClick={addWildcard}>Wildcard</button>
                <button onClick={resetDeck}>Reset</button>
                <button onClick={toggleDeckDisplay}>
                    {showAllDeckCards ? "Hide Deck" : "Show All Deck Cards"}
                </button>
            </div>

            {/* Display All Remaining Cards in Deck */}
            {showAllDeckCards && (
                <div className="deck-cards">
                    <h2>Remaining Deck Cards</h2>
                    <div className="deck-list">
                        {deck.map((card, index) => (
                            <Card key={index} value={card.value} suit={card.suit} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Deck;