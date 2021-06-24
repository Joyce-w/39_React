import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm"
import Todo from "./Todo"
import { v4 as uuid } from "uuid"
import './TodoList.css'


const TodoList = () => {
    //create initial state value
    const INITIAL_STATE = [
        { 
            id: uuid(),
            task: "Clean fish tank"
        }
    ]

    //create list state form
    const [tasks, setTasks] = useState(INITIAL_STATE);
    console.log(tasks)

    //create update for tasks
    const updateTasks = (task) => {
        setTasks((tasks) => [...tasks, {id:uuid(), task}])
    }

    //remove task function when clicked
    const remove = (e) => {
        let todo = (e.target.parentElement.parentElement.id)
        setTasks(tasks.filter(({ id }) => {
            return id !== todo;
        }))
    }

    return (
        <>
            <NewTodoForm updateTasks={updateTasks} />
            
            <h3>What to do List</h3>
            <div className="NewTodoForm-ul-div">
                <ul className="NewTodoForm-ul">
                {tasks.map(({ id, task }) => {
                    return <Todo key={id} id={id} task={task} remove={ remove }/>
                })}
                </ul>                
            </div>

        </>
    )
}

export default TodoList;