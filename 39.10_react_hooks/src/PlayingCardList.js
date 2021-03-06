import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { useAxios } from "./hooks";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {

  //destructure array in useAxios 
  const [data, updateData, clearCards] = useAxios();

    const addCard = async () => {
    const response = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/draw/"
      );
      updateData(response.data)
  };


console.log(data)
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {data.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.res.cards[0].image} />
        ))}
      </div>
      <button onClick={clearCards}>Clear Playing Cards</button>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
