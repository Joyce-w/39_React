import React, {useState,  useEffect, useRef } from "react"
import axios from "axios"
import Card from "./Card"
import "./DeckofCards.css"

const DeckofCards = () => {
    
    const [deckID, setDeckID] = useState()
    const [card, setCard] = useState([])
    const [autoDraw, setAutoDraw] = useState(false)
    const timerRef = useRef(null);

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
    useEffect(() => {
        async function grabCard() {
            const deck = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
            let newCard = deck.data.cards[0].image;

            //handle when no cards are remaining
            if (deck.data.remaining === 0) {
                alert("Last card")
                setAutoDraw(false)
            } else {
                setCard([...card, newCard]);
            }
        }

        //trigger drawing interval when autoDraw toggled
        if (autoDraw && !timerRef.current) {
            timerRef.current = setInterval(async () => {
                await grabCard();
            }, 1000);
        }
        
        //cleanup function
        return () => {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }

    })
    //toggles autoDraw state 
    const toggleDraw = () => {
        setAutoDraw(autoDraw => !autoDraw)
    }

    return (
 
        <div className="DeckofCards">
            <button className="DeckofCards-btn" onClick={ toggleDraw}> Draw Card </button>

            <div className="DeckofCards-card">
                {card === '' ? 'Loading' :
                    card.map(card => < Card card={card} />)
                }
            </div>
        </div>

    )
}

export default DeckofCards;