import React from "react";
import "./Box.css"


const Box = ({id, boxWidth, boxHeight, bgColor, remove}) => {
    
    const divStyle = {
        width: +boxWidth,
        height: +boxHeight,
        backgroundColor: bgColor
    }

    return (
        <>
            <div id={ id }className="Box" style={divStyle}>
            <button className="Box-btn" onClick={remove}>x</button>
            </div>
        </>
    )

}

export default Box