import React, { useState } from "react"
import axios from "axios";
import uuid from "uuid";

//flips a card 
const useFlip = () => {
    //create state to indicate flip
    const [facingUp, setFacingUp] = useState(true)

    const flipCard = () => {
    setFacingUp(facingUp => !facingUp);
    };

    return [facingUp, flipCard];
}

//useAxios in PLayingCardList
const useAxios = () => {

    //create state to hold data
    const [data, setData] = useState([])

    //callback function 
    const updateData = async (res) => {
        console.log(res)
    //update setData to have old and newData
        setData(() => 
            [...data,
            {res, id: uuid()}]
        
        )
    };

    //function clears cards from state
    const clearCards = () => {
        setData([])
    }

    return [data, updateData, clearCards];
}


export {useFlip, useAxios};