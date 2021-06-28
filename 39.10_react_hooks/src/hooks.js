import React, {useState} from "react"

const useFlip = () => {
    //create state to indicate flip
    const [facingUp, setFacingUp] = useState(true)

    const flipCard = () => {
    setFacingUp(facingUp => !facingUp);
    };

    return [facingUp, flipCard]
}

export default useFlip;