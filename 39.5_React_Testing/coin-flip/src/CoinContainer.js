import React, {useState} from "react"
import Coin from "./Coin"
import heads from "./dime_heads.jpg"
import tails from "./dime_tails.jpg"
import "./CoinContainer.css"

const data = [
    {
    id: 1,
    image: heads,
    name: "dime_head"
    },
    {
    id: 2,
    image: tails,
    name: "tail_head"
    }
]

const CoinContainer = () => {
    //create random num to flip
    let rand = () => {
        const idx = Math.floor(Math.random() * 2);
        return idx
    } 
    //state for random coin flip
    const [currSide, flip] = useState(0);

    //total counter
    const [total, add] = useState(0);
    //head counter
    const[headCount, addHead] = useState(0)
    //tail counter
    const [tailCount, addTail] = useState(0)

    const flipCoin = () => {
        flip(rand())
        add(total + 1)

        if (data[currSide].name === "dime_head") {
        addHead(headCount + 1)
        }
        else {
            addTail(tailCount + 1)
        }
    }
    
    return (
        <div className="CoinContainer">
            <h1>Flip a coin </h1>
            <div>
                <Coin data={ data[currSide] }/>                
            </div>
            <p>Out of {total} flips, there have been {headCount} heads and { tailCount } tails. </p>
            <button onClick={() => flipCoin()}>Flip Coin</button>
        </div>
    )
}

export default CoinContainer;