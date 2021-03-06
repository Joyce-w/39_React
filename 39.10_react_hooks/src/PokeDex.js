import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import { useAxios } from "./hooks";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {

const [data, updateData, clearCards] = useAxios();

  const addPokemon = async name => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}/`
    );

    updateData(response.data)
    };
    console.log(data)

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {data.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.res.sprites.front_default}
            back={cardData.res.sprites.back_default}
            name={cardData.res.name}
            stats={cardData.res.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
      <button onClick={clearCards}>Clear Pokemon Cards</button>
    </div>
  );
}

export default PokeDex;
