import React from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import './BoxList.css'

const BoxList = () => {

    return (
        <div className="BoxList">
            <h1>BoxList</h1>
            <NewBoxForm/>
        </div>
        

    )
}

export default BoxList