import React from "react"
import "./Card.css"

const Card = ({ card }) => {

    const randomAngle = () => {
        return Math.floor(Math.random() * (20 - (-20)) + (-20));
    }

    const divStyle = {
        transform: 'rotate(' + randomAngle() + `deg)`
    }

    return (
        <img className="Card" style={divStyle} src={card} alt="card"></img>
    )

}

export default Card;