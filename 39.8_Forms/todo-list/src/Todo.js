import React from "react";
import './Todo.css'


const Todo = ({ id, task , remove}) => {
    return (
            <div data-testid="Todo-test" id={ id } className="Todo">
            <li className="Todo-li">
                {task} 
                <button className="Todo-btn" onClick={ remove }>x</button>
            </li>
            </div>
    )
}

export default Todo;