import React, {useState,  useEffect, useRef } from "react"
import axios from "axios"
import Card from "./Card"
import "./DeckofCards.css"

const DeckofCards = () => {

    
    const [deckID, setDeckID] = useState()
    const [card, setCard] = useState()
    // console.log(card)

    //add effect to render a deck id after page loads
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
    
    //function to grab a card when page loads
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
    
    const [drawing, setDrawing] = useState(false);

    const [seconds, setSeconds] = useState(0)

    const timerId = useRef();
    console.log(timerId)

    //trigger timer when clicked
    useEffect(() => {
        timerId.current = setInterval(() => {
            setSeconds(seconds => seconds + 1)
            grabCard();
        }, 1000)

    return clearInterval(timerId.current)

    },[])

    const stopTimer = () => {
        clearInterval(timerId.current)
    }

    return (
 
        <div className="DeckofCards">
            <button className="DeckofCards-btn" onClick={() => grabCard()}> Draw Card </button>

            <div className="DeckofCards-card">
                { card ? <Card card={card.cards[0].image} /> : "Loading..."}                  
            </div>

            <button onClick={ stopTimer }>Drawing</button>
        </div>

    )
}

export default DeckofCards;