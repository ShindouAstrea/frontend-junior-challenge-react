import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "features/todo/todoSlice";
import './styles.css';
import {v4} from 'uuid';

const TodoForm = () =>{
    const [label,setLabel]= React.useState('');
    const dispatch = useDispatch();
    const handleChange=(event)=>{
      
        setLabel(event.target.value);
        
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        const inputValue = label.trim(); // obtener el valor del input y eliminar espacios en blanco al inicio y al final
  
        if (!inputValue) {
          // Si el valor del input está vacío, no hacer nada
          return;
        }
        dispatch(addTodo({
            label: inputValue,
            id: v4(),
            checked: false
        }));
        setLabel('');
    };


    return(
        <form onSubmit={handleSubmit}>
                <input
                id="inputTodo"
                placeholder=" Enter new to do"
                className="todoInput"
                type="text"
                value={label}
                onChange={handleChange}
                autoComplete="false"
                />
                <button onClick={handleSubmit}className="btn  btn-primary btn-add" type="Submit" > ADD TO DO </button>
        </form>
        
    )
}
export default TodoForm