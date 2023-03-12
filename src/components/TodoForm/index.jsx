import React from "react";
import './styles.css';

const TodoForm = () =>{
    const [label,setLabel]= React.useState();
    const handleChange=(event)=>{
        setLabel(event.target.value);
        console.log(label);
    };
    return(
        <div className="todo-form">
            <input
            placeholder=" Enter new to do"
            className="todoInput"
            type="text"
            onChange={handleChange}
            />
            <button className="btn btn-primary btn-add" type="button" > ADD TO DO </button>
        </div>
        
    )
}
export default TodoForm