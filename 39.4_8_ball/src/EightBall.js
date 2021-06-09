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

    //state for counting green
    const [greenCount, addGreen] = useState(0)
    //state for counting goldenrod
    const [goldenrodCount, addGoldenrod] = useState(0)
    //state for counting red
    const [redCount, addRed] = useState(0)

    //update the state value each time the div is clicked
    const click = () => {
        
        changeAnswerNum(rand())
        newAnswer(answers[answerNum].msg)
        newColor(answers[answerNum].color)
        counting(bgColor)
    }

    //reset the eight ball back to default values
    const reset = () => {
        newColor('black')
        newAnswer('Think of a Question')
        addGreen(0)
        addGoldenrod(0)
        addRed(0)
    }

    let counting = (bgColor) => {
        console.log(bgColor)
        if (bgColor === 'green') {
            addGreen(greenCount + 1)
            
        }
        if (bgColor === 'red') {
            addRed(redCount + 1)
        }
        if (bgColor === 'goldenrod') {
            addGoldenrod(goldenrodCount + 1)
        }
    }
    return(
        <>
            <h1 > EightBall</h1>
            <div>
                <p>Red: { redCount }</p>
                <p>Green: { greenCount }</p>
                <p>goldenrod: { goldenrodCount } </p>
                
                
            </div>
            <div onClick={() => click()} style={{ backgroundColor: bgColor, borderColor: bgColor }} className="EightBall">
                <p className="EightBall-p">{msg}</p>
            </div>
            <button onClick={reset} className="EightBall-btn">Reset</button>
        </>
    )
}

export default EightBall;


/*Soln shows the call back function returning entire div:

  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: color }}
    >
      <b>{msg}</b>
    </div>
  );*/