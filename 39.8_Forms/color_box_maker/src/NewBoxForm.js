import React, { useState } from "react";
import "./NewBoxForm.css";


const NewBoxForm = ({ addBox }) => {
    //create initial state values
    const INITIAL_STATE = {
        width: '',
        height: '',
        bgColor: ''
    }

    //state for box properties
    const [formData, setFormData] = useState(INITIAL_STATE)

    //handle changes when typing
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    //handle changes when form is submitted
    const handleSubmit = (e) => {
        e.preventDefult();
        addBox(formData.width, formData.height, formData.bgColor);
        setFormData(INITIAL_STATE)
    }
    
    return (
        <>
        
            <form className="NewBoxForm-form" onSubmit={handleSubmit}>
                <h4 className="NewBoxForm-h4">Create A New Box!</h4>
            {/* width input */}
            <label htmlFor="width" className="NewBoxForm-label"> Box Width </label>
            <input className="NewBoxForm-input"
                type="number"
                min="1"
                max="250"
                name="width"
                placeholder="width"
                value={formData.width}
                onChange={handleChange}
            />
            {/* height input */}
            <label htmlFor="height" className="NewBoxForm-label"> Box height </label>
            <input className="NewBoxForm-input"
                type="number"
                min="1"
                max="250"
                name="height"
                placeholder="height"
                value={formData.height}
                onChange={handleChange}
            />
            {/* bgColor input */}
            <label htmlFor="bgColor" className="NewBoxForm-label"> Box Background Color </label>
            <input className="NewBoxForm-input"
                type="color"
                name="bgColor"
                placeholder="bgColor"
                value={formData.bgColor}
                onChange={handleChange}
            />
        <button>Add Box</button>
        </form>

        </>    
    )
}

export default NewBoxForm