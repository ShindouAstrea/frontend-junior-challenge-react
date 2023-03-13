import TodoListItem from "components/TodoListItem";
import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { editTodo,removeTodo } from "features/todo/todoSlice";
import "./styles.css";

const TodoList = () => {
  const todoList = useSelector(state=>state.todos);
  const dispatch= useDispatch();
  let isTodoListEmpty ;
  //Analize if there are elements in the array of todo.
  todoList.length > 0 ?  isTodoListEmpty = false :  isTodoListEmpty = true;

  const handleDelete = (todoId) => {
    dispatch(removeTodo(todoId));
   
  };

  const toggleCheck = (todoId, isChecked) => {
    dispatch(editTodo({
      id: todoId,
      checked: isChecked
    }));
  };
 
  const arrayTodoItems = todoList.map(todo => 
    <TodoListItem checked={todo.checked} key={todo.id} label={todo.label} onCheck={()=>toggleCheck(todo.id,todo.checked)} onDelete={()=>handleDelete(todo.id)}/>
   )
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
