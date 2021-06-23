import React, {useState} from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import './BoxList.css'

const BoxList = () => {

    const INITIAL_STATE = [
        {
            width: '30',
            height: '50',
            bgColor: '#ffa3a3'
        }
    ]
    //state for box properties
    const [ boxData, setBoxData ] = useState(INITIAL_STATE)
    console.log(boxData)

    //create functional prop to pass down to children
    const addBox = ( width, height, bgColor ) => {
        setBoxData((boxData) => [...boxData, { width, height, bgColor }])
    }


    return (
        <div className="BoxList">
            <h1>BoxList</h1>
            <NewBoxForm addBox={ addBox }/>
        </div>
        

    )
}

export default BoxList