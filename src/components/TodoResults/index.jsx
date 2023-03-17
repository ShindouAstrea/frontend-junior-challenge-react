import React from "react";
import { useSelector } from "react-redux";

import "./styles.css";

const TodoResults = () => {
  // Fix an ability to calculate completed tasks

const selector = useSelector( state=>state.todos);
const total = selector.length ;
let doneCounter = 0 ;

 for(let todo of selector){
  if(todo.checked){
    doneCounter++;
  }
 };
 let percentage = 0 ;
 if(total !== 0 ){
  percentage = (doneCounter / total) * 100 ;
 } 
 if(percentage < 100) percentage = Math.trunc(percentage);

 if(percentage === 0 && total ===0){
  return(
    <div className="not-todos">
      <div style={{justifyContent:"center",alignItems:"center"}}>
      Looks like you don&apos;t has Todos , Try to add some !
      </div>

    </div>
  )
 }

  return (
    <div >
      <div className="todo-results">
        <h3>Done:{doneCounter}</h3>

      </div>
      <h4>Percentage done: </h4>
      <div className="progressContainer" >
      
      <div
        className="progress-bar-fill"
        style={{ width: `${percentage}%` }}
      >{percentage}%</div>
      </div>
    </div>
    
  )
  
};

export default TodoResults;
