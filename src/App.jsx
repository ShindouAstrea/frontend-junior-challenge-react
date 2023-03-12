import React from "react";
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import {useSelector} from 'react-redux';

import "./App.css";
import TodoForm from "components/TodoForm";

const App = () => {
  const todoState = useSelector(state=>state.todos);
  console.log(todoState);
  return (
    <div className="root">
      
        <TodoList />
        <TodoResults />
        <TodoForm />
    </div>
  );
};

export default App;
