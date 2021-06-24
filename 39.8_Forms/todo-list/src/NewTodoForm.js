import React, { useState } from "react";
import './NewTodoForm.css'


const TodoListForm = ({updateTasks}) => {

    const [task, setTask] = useState('')
    console.log(task)
    //handle submit for form
    const handleSubmit = (e) => {
        e.preventDefault();
        updateTasks(task)
        setTask('')
    }

    //handle input change and update to refelect in state
    const handleChange = (e) => {
        const { value } = e.target
        setTask(value)

    }

    return (
        <>
            <form className="NewTodoForm-form" onSubmit={ handleSubmit }>
                <label htmlFor="task">New Todo </label>
                <input
                    className="NewTodoForm-input"
                    id="task"
                    name='task'
                    type="text"
                    placeholder="More things to do"
                    value={task}
                    onChange={ handleChange }
                />
                <button className="NewTodoForm-btn">Add new task</button>
            </form>
        </>
    )
}

export default TodoListForm;