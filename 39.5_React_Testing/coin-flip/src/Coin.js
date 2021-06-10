import React from "react"
import "./Coin.css"

const Coin = ({data}) => {
    return (
        <div className="Coin">
            <img className="Coin-img" src={data.image} alt={data.name}></img>
        </div>
    
    )
}

export default Coin;