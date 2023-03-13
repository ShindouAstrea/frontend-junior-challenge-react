import React from "react";
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import {useSelector} from 'react-redux';

import "./App.css";
import TodoForm from "components/TodoForm";

const App = () => {
  return (
    <div className="root">
      
        <TodoList />
        <TodoResults />
        <TodoForm />
    </div>
  );
};

export default App;
