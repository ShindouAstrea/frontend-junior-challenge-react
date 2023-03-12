import TodoListItem from "components/TodoListItem";
import React from "react";
import {useSelector} from 'react-redux';
import "./styles.css";

const TodoList = () => {
  const todoList = useSelector(state=>state.todos);
  let isTodoListEmpty ;
  //Analize if there are elements in the array of todo.
  todoList.length > 0 ?  isTodoListEmpty = false :  isTodoListEmpty = true;

  const arrayTodoItems = todoList.map(todo => 
   <TodoListItem checked={todo.checked} key={todo.id} label={todo.label}  onCheck={"defaultChecked"}/>
  )
  const handleDelete = (todoId) => {
    // Fix an ability to delete task
  };

  const toggleCheck = (todoId, isChecked) => {
    
    // Fix an ability to toggle task
    
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {/* Condition to render a message if there are not tasks to do, if there are , show the list of task to do*/}
      {isTodoListEmpty ? 
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      :
        <div className="todo-list-content">
        {/* Fix an ability to render todos */}
        {arrayTodoItems}
        
        </div>
      }
    </div>
  );
};

export default TodoList;
