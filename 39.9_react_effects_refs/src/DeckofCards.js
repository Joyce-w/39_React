import React, {useState,  useEffect } from "react"
import axios from "axios"
import Card from "./Card"
import "./DeckofCards.css"

const DeckofCards = () => {

    
    const [deckID, setDeckID] = useState()
    const [card, setCard] = useState()
    console.log(card)

    async function grabCard() {

        const deck = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
        let newCard = deck.data;

        if (newCard.remaining === 0) {
            alert("Last card")
            setCard(null)
        } else {
            setCard(newCard);
        }

    }       

    useEffect(() => {
        //grab a new deck
        async function newDeck() {
            const res = await axios.get('https://deckofcardsapi.com/api/deck/new/')
            const deckID = res.data.deck_id;

            //shuffle deck
            await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`)
            setDeckID(deckID) ;
        }
        newDeck();
    },[])
    
    return (
 
        <div className="DeckofCards">
            <button className="DeckofCards-btn" onClick={() => grabCard()}> Draw Card </button>

            <div className="DeckofCards-card" >
                { card ? <Card card={card.cards[0].image} /> : "Loading..."}                  
            </div>

        </div>


    )
}

export default DeckofCards;