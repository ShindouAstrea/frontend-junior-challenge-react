import React from "react";
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import { Provider } from "react-redux";
import {store} from "./app/store";
import "./App.css";

const App = () => {
  return (
    <div className="root">
      <Provider store={store}>
        <TodoList />
        <TodoResults />
      </Provider>
      
    </div>
  );
};

export default App;
