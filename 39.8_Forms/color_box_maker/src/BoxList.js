import React, { useState } from "react";
import { v4 as uuid } from "uuid"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import './BoxList.css'

const BoxList = () => {

    const INITIAL_STATE = [
        {
            id: uuid(),
            width: 30,
            height: 50,
            bgColor: '#ffa3a3'
        },
        {
            id: uuid(),
            width: 90,
            height: 90,
            bgColor: "#cfccff"
        }
    ]
    //state for box properties
    const [ boxData, setBoxData ] = useState(INITIAL_STATE)

    //create functional prop to pass down to children
    const addBox = ( width, height, bgColor ) => {
        setBoxData((boxData) => [...boxData, { width, height, bgColor, id:uuid() }])
    }
    
    //remove box on click
    const remove = (e) => {
        let parentBoxID = e.target.parentElement.id

        //filter data to update boxData without the removed box
        setBoxData(boxData.filter(({id}) => {
            return id !== parentBoxID;
        }))
    }

    return (
        <div className="BoxList">
            <h1>BoxList</h1>
            <NewBoxForm addBox={addBox} />
            
            <div className="BoxList-Boxes">
                {boxData.map(({ id, width, height, bgColor }) => {
                    return <Box key={id} id={ id }boxWidth={width} boxHeight={height} bgColor={bgColor} remove={ remove }/>
                })}
            </div>

        </div>
    )
}

export default BoxList