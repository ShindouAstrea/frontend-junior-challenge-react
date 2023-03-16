import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "features/todo/todoSlice";
import './styles.css';
import {v4} from 'uuid';

const TodoForm = () =>{
    const [label,setLabel]= React.useState();
    const dispatch = useDispatch();
    const handleChange=(event)=>{
      
        setLabel(event.target.value);
        
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(addTodo({
            label,
            id: v4(),
            checked: false
        }));
        document.getElementById('inputTodo').value = null;
    };


    return(
        <form onSubmit={handleSubmit}>
                <input
                id="inputTodo"
                placeholder=" Enter new to do"
                className="todoInput"
                type="text"
                onChange={handleChange}
            
                autoComplete="false"
                />
                <button onClick={handleSubmit}className="btn btn-primary btn-add" type="Submit" > ADD TO DO </button>
        </form>
        
    )
}
export default TodoForm