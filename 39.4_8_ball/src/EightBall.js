import React, {useState} from "react";
import "./EightBall.css"

const EightBall = ({ answers }) => {
    //create random Num based on answer length
    const rand = () => {
        return Math.floor(Math.random() * answers.length)
    }
    const [answerNum, changeAnswerNum] = useState(rand())
    //state for changing msgs
    const [msg, newAnswer] = useState("Think of a Question")
    //state for changing colors
    const [bgColor, newColor] = useState("black")
    
    //update the state value each time the div is clicked
    const click = () => {
        changeAnswerNum(rand())
        newAnswer(answers[answerNum].msg)
        newColor(answers[answerNum].color)
    }

    //reset the eight ball back to default values
    const reset = () => {
        newColor('black')
        newAnswer('Think of a Question')
    }

    return(
        <>
            <h1 > EightBall</h1>
            <div onClick={() => click()} style={{ backgroundColor: bgColor, borderColor: bgColor }} className="EightBall">
                <p className="EightBall-p">{msg}</p>
            </div>
            <button onClick={reset} className="EightBall-btn">Reset</button>
        </>
    )
}

export default EightBall;
